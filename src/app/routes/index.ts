import express from "express";
import { BlogRoutes } from "../modules/blog/blog.route";
const router = express.Router()

const ModulesRoutes = [
    {
        path: '/blogs',
        route: BlogRoutes
    }
]






ModulesRoutes.forEach(route=> router.use(route.path, route.route))
export default router;
