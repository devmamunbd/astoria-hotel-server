import express from "express";
import { BlogController } from "./blog.controller";
const router = express.Router()



// create post router
router.post('/create-post', BlogController.createBlogPosts);

// get all blogs
router.get('/', BlogController.getAllBlogs);

// get single blog by id
router.get('/:id', BlogController.getSingleBlogs)

// update blog
router.patch('/update-blog/:id', BlogController.updateBlogs)

// delete blog
router.delete('/:id', BlogController.deleteBlogs)


export const BlogRoutes = router;
