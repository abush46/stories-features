import type { Metadata, Viewport } from 'next'
import { Geist, Noto_Sans_Ethiopic } from 'next/font/google'
import './globals.css'
const geist=Geist({subsets:['latin'],variable:'--geist'})
const ethiopic=Noto_Sans_Ethiopic({subsets:['ethiopic'],variable:'--ethiopic'})
export const metadata:Metadata={title:'Selam Academy | School Management',description:'Bilingual Ethiopian K–12 school management system'}
export const viewport:Viewport={themeColor:'#174f3a',width:'device-width',initialScale:1}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="bg-background"><body className={`${geist.variable} ${ethiopic.variable} font-sans`}>{children}</body></html>}
