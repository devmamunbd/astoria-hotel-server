import { Request, Response } from "express";
import { BlogService } from "./blog.service";





// create a blog posts
const createBlogPosts = async(req: Request, res: Response)=> {
    const blog = req.body;
    const result = await BlogService.createBlogPost(blog);
    res.status(201).send({
        message: 'Post Create SuccessFully',
        post: result
    })

}

// get all blogs
const getAllBlogs = async(req: Request, res: Response)=> {
    // res.send('Blog Rouet Is Here')
    const blog = req.body;

    const {search, category, location} = req.query;
    let query = {}
    if (query) {
        query = {
            ...query,
            $or: [
                {title: {$regex: search, $options: "i"}},
                {content: {$regex: search, $options: "i"}},
            ]
        }
    }
    if(category){
        query = {
            ...query,
            category: category
        }
    }

    if (location) {
        query = {
            ...query,
            location: location
        }
    }

    const result = (await BlogService.getAllBlog(blog, query));
    res.status(200).send({
        message: 'All Blogs Post Get SuccessFully',
        post: result
    })
}


// get single blog by id
const getSingleBlogs = async(req: Request, res: Response)=> {
    const id = req.params.id;
    const post = await BlogService.getSingleBlog(id);
    if(!post){
        return res.status(404).send({message: "Blog Not Found"})
    };
    res.status(200).send({
        message: 'Get Single Blog SuccessFully',
        post: post
    })
}

// update blog
const updateBlogs = async(req: Request, res: Response)=> {
    const {id} = req.params;
    const updateBlog = req.body;
    const result = await BlogService.updateBlog(id, updateBlog);
    res.status(200).send({
        message: 'Update Blog SuccessFully',
        post: result
    })
}

// delete blog
const deleteBlogs = async(req: Request, res: Response)=> {
    const id = req.params.id;
    const result = await BlogService.deleteBlog(id);
    res.status(200).send({
        message: 'Delete Blog SuccessFully',
        post: result
    })
}


export const BlogController = {
    getAllBlogs,
    createBlogPosts,
    getSingleBlogs,
    updateBlogs,
    deleteBlogs
}
