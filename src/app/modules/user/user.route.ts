import express from "express";
import { UserController } from "./user.controller";
const router = express.Router()



// register user
router.post('/register', UserController.createUsers)

// login user
router.post('/login', UserController.loginUsers)



export const userRoutes = router;
