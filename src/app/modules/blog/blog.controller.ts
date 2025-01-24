import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import { Comment } from "../comment/comment.model";





// create a blog posts
const createBlogPosts = async(req: Request, res: Response)=> {
    const blog = ({ ...req.body });
    const result = await BlogService.createBlogPost(blog);
    res.status(201).send({
        message: 'Post Create SuccessFully',
        post: result
    })

}

// get all blogs
const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const { search, category, location } = req.query;

        let query: any = {}; // Initialize an empty query object

        // Add search condition
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { content: { $regex: search, $options: "i" } },
            ];
        }

        // Add category condition
        if (category) {
            query.category = category;
        }

        // Add location condition
        if (location) {
            query.location = location;
        }

        console.log("Query: ", query); // Debugging log

        // Fetch blogs with the constructed query
        const result = await BlogService.getAllBlog(query);

        res.status(200).send({
            message: "All Blogs Post Get Successfully",
            post: result,
        });
    } catch (error) {
        console.error("Error fetching blogs:", error); // Debugging log
        res.status(500).send({
            message: "Failed to fetch blogs"// Include error details
        });
    }
};



// get single blog by id
const getSingleBlogs = async (req: Request, res: Response)=> {
    const id = req.params.id;
    const post = await BlogService.getSingleBlog(id);
    if(!post){
        return res.status(404).send({message: "Blog Not Found"})
    };
    const comment = await Comment.find({id: id}).populate('user', "username email")
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
    if (!result) {
        return res.status(404).send({message: 'Blog Not Found'})
    }
    res.status(200).send({
        message: 'Update Blog SuccessFully',
        post: result
    })
}

// delete blog
const deleteBlogs = async(req: Request, res: Response)=> {
    const id = req.params.id;
    const result = await BlogService.deleteBlog(id);
    if (!result) {
        return res.status(404).send({message: 'Blog Not Fount'})
    }
    // delete related comments
    await Comment.deleteMany({id: id})
    res.status(200).send({
        message: 'Delete Blog SuccessFully',
        post: result
    })
}

// related blogs
const relatedBlogs = async(req: Request, res: Response)=> {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send({message: 'Post id is required'})
    }
    const result = await BlogService.relatedBlog(id)
    res.status(200).send({
        message: 'Related Blog Get SuccessFully',
        post: result
    })

}



export const BlogController = {
    getAllBlogs,
    createBlogPosts,
    getSingleBlogs,
    updateBlogs,
    deleteBlogs,
    relatedBlogs
}
