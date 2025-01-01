import express from "express";
import { BlogRoutes } from "../modules/blog/blog.route";
import { commentRoutes } from "../modules/comment/comment.route";
import path from "path";
import { userRoutes } from "../modules/user/user.route";
const router = express.Router()

const ModulesRoutes = [
    {
        path: '/blogs',
        route: BlogRoutes
    },
    {
        path: '/comments',
        route: commentRoutes
    },
    {
        path: '/users',
        route: userRoutes
    }
]






ModulesRoutes.forEach(route=> router.use(route.path, route.route))
export default router;
