import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getSchoolData } from './actions/school'
import { SchoolApp } from '@/components/school-app'

export default async function Page(){
 const session=await auth.api.getSession({headers:await headers()})
 if(!session?.user) redirect('/sign-in')
 const data=await getSchoolData()
 return <SchoolApp data={data} user={{name:session.user.name,email:session.user.email}}/>
}
