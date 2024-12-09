import { Request, Response } from "express";
import { BlogService } from "./blog.service";





// create a blog post
const createBlogPosts = async(req: Request, res: Response)=> {
    const blog = req.body;
    const result = await BlogService.createBlogPost(blog);
    res.status(201).send({
        message: 'Post Create SuccessFully',
        post: result
    })

}

// get all blog
const getAllBlogs = async(req: Request, res: Response)=> {
    // res.send('Blog Rouet Is Here')
    const blog = req.body;
    const result = await BlogService.getAllBlog(blog);
    return result;
}






export const BlogController = {
    getAllBlogs,
    createBlogPosts
}
