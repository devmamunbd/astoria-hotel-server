import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import router from './app/routes';
const app: Application = express()

// using cors
app.use(cors())

// data parse
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// Application routes
app.use('/api/hotel', router)


app.get('/', (req: Request, res: Response) => {
    res.send("Astoria Hotel's Server is Running!")
  })


  export default app;
