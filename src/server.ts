import mongoose from 'mongoose';
import express from 'express';
const app = express()
const port = 3000




// database connection

async function bootstrap() {
    try {
  await mongoose.connect('mongodb://127.0.0.1:27017/astoria-hotel');
  console.log(`Database Connection SuccessFully`)
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    } catch (error) {
        console.log('Falied To Connect Database',error)
    }
}
bootstrap()


app.get('/', (req, res) => {
  res.send("Astoria Hotel's Server is Running!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
