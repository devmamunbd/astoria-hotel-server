import mongoose from 'mongoose';
const port: number = 3000
import app from './app';
import config from './app/config/config';



// database connection

async function bootstrap() {
    try {
  await mongoose.connect(config.databse_url as string);
  console.log(`Database Connection SuccessFully`)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

    } catch (error) {
        console.log('Falied To Connect Database',error)
    }
}

bootstrap().then(()=> console.log('Connect MongoDB ')).catch(err => console.log(err));
bootstrap()
