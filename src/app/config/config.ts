import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path: path.join(process.cwd(), '.env')})


export default {
    env: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
    secret_key: process.env.JWT_SECRET_KEY,

}
