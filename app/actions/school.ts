'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { announcements, attendance, fees, grades, schoolProfiles, students, teachers } from '@/lib/db/schema'
import { and, desc, eq, sql } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

async function identity() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  const [profile] = await db.select().from(schoolProfiles).where(eq(schoolProfiles.userId, session.user.id)).limit(1)
  if (!profile) { const [created] = await db.insert(schoolProfiles).values({ userId: session.user.id, role: 'admin' }).returning(); return { user: session.user, profile: created } }
  return { user: session.user, profile }
}

export async function getSchoolData() {
  const { user } = await identity()
  const [studentRows, teacherRows, noticeRows, attendanceRows, gradeRows, feeRows] = await Promise.all([
    db.select().from(students).where(eq(students.userId, user.id)).orderBy(desc(students.createdAt)),
    db.select().from(teachers).where(eq(teachers.userId, user.id)).orderBy(desc(teachers.createdAt)),
    db.select().from(announcements).where(eq(announcements.userId, user.id)).orderBy(desc(announcements.createdAt)),
    db.select().from(attendance).where(eq(attendance.userId, user.id)),
    db.select().from(grades).where(eq(grades.userId, user.id)),
    db.select().from(fees).where(eq(fees.userId, user.id)),
  ])
  return { students: studentRows, teachers: teacherRows, announcements: noticeRows, attendance: attendanceRows, grades: gradeRows, fees: feeRows }
}

const studentSchema = z.object({ firstName:z.string().min(2), lastName:z.string().min(2), firstNameAm:z.string().optional(), lastNameAm:z.string().optional(), admissionNo:z.string().min(2), gender:z.string(), dateOfBirth:z.string(), grade:z.string(), section:z.string(), guardianName:z.string().min(2), guardianPhone:z.string().min(9) })
export async function addStudent(formData: FormData) {
  const { user, profile } = await identity()
  if (profile.role !== 'admin') throw new Error('Admin access required')
  const parsed = studentSchema.parse(Object.fromEntries(formData))
  await db.insert(students).values({ userId:user.id, schoolId:profile.schoolId, ...parsed })
  revalidatePath('/')
}

export async function updateAttendance(studentId:number, status:string) {
  const { user } = await identity(); const date = new Date().toISOString().slice(0,10)
  await db.insert(attendance).values({ userId:user.id, studentId, date, status }).onConflictDoUpdate({ target:[attendance.userId, attendance.studentId, attendance.date], set:{ status } })
  revalidatePath('/')
}

export async function addAnnouncement(formData:FormData) {
  const { user, profile } = await identity()
  await db.insert(announcements).values({ userId:user.id, schoolId:profile.schoolId, titleEn:String(formData.get('titleEn')), titleAm:String(formData.get('titleAm')), bodyEn:String(formData.get('bodyEn')), bodyAm:String(formData.get('bodyAm')), audience:String(formData.get('audience') || 'all') })
  revalidatePath('/')
}
