import express from "express";
import { BlogController } from "./blog.controller";
import { verifyToken } from "../../middlewares/verifyToken";
const router = express.Router()



// create post router
router.post('/create',verifyToken, BlogController.createBlogPosts);

// get all blogs
router.get('/', BlogController.getAllBlogs);

// get single blog by id
router.get('/:id',  BlogController.getSingleBlogs)

// update blog
router.patch('/update-blog/:id', verifyToken, BlogController.updateBlogs)

// delete blog
router.delete('/:id', verifyToken, BlogController.deleteBlogs)

// related Blog
router.get('/related/:id', BlogController.relatedBlogs)


export const BlogRoutes = router;
