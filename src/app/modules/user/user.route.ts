import express from "express";
import { UserController } from "./user.controller";
const router = express.Router()



// register user
router.post('/register', UserController.createUsers)

// login user
router.post('/login', UserController.loginUsers)

// get all user
router.get('/allUsers', UserController.getAllUsers)

// delete a user
router.delete('/delete/:id', UserController.deleteUsers)

// update user role
router.put('/update/:id', UserController.updateUserRoles)


// log out user
router.post('/logout', UserController.logOutUsers)

export const userRoutes = router;
