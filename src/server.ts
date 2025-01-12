import mongoose from 'mongoose';
const port: number = 3000
import app from './app';
import config from './app/config/config';
import { Server } from 'http';

let server: Server


// database connection

async function bootstrap() {
    try {
  await mongoose.connect(config.database_url as string);
  console.log(`Database Connection SuccessFully`)

  server = app.listen(port,  () => {
    console.log(`Example app listening on port ${port}`)
  })

    } catch (error) {
        console.log('Falied To Connect Database',error)
    }
}

bootstrap()
