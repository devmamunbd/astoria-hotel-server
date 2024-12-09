import express from "express";
import { BlogController } from "./blog.controller";
const router = express.Router()



// create post router
router.post('/create-post', BlogController.createBlogPosts);



router.get('/', BlogController.getAllBlogs);





export const BlogRoutes = router;
