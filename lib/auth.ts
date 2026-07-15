import { betterAuth } from 'better-auth'
import { Pool } from 'pg'
const runtime=process.env.V0_RUNTIME_URL
const baseURL=process.env.BETTER_AUTH_URL||runtime||'http://localhost:3000'
const trustedOrigins=[runtime,'http://localhost:3000','http://127.0.0.1:3000'].filter(Boolean) as string[]
export const auth=betterAuth({database:new Pool({connectionString:process.env.DATABASE_URL}),secret:process.env.BETTER_AUTH_SECRET,baseURL,trustedOrigins,emailAndPassword:{enabled:true},advanced:process.env.NODE_ENV==='development'?{defaultCookieAttributes:{sameSite:'none',secure:true}}:undefined})
