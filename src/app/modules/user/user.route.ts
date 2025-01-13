import express from "express";
import { UserController } from "./user.controller";
const router = express.Router()



// register user
router.post('/register', UserController.createUsers)

// login user
router.post('/login', UserController.loginUsers)

// get all user
router.get('/allUsers', UserController.getAllUsers)

// log out user
router.post('/logout', UserController.logOutUsers)

export const userRoutes = router;
