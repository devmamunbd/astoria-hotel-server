import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";




// get all blog
const createBlogPost = async (blog: IBlog)=> {
    const result = await Blog.create(blog)
    return result;
}


// get all blog
const getAllBlog = async (blog: IBlog)=> {
    const result = await Blog.find(blog);
    return result;
}





export const BlogService = {
    getAllBlog,
    createBlogPost
}
