import express from "express";
import { UserController } from "./user.controller";
const router = express.Router()


router.post('/register', UserController.createUsers)


export const userRoutes = router;
