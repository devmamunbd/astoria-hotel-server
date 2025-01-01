import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";




// get all blog
const createBlogPost = async (blog: IBlog)=> {
    const result = await Blog.create(blog)
    return result;
}


// get all blog
const getAllBlog = async (blog: IBlog, query: {})=> {
    // const {search} = req.query
    const result = await Blog.find(blog, query).sort({createdAt: -1});
    return result;
}

// get single blog by id
const getSingleBlog = async(id: string)=> {
    const result = await Blog.findById(id);
    return result
}

// update blog
const updateBlog = async(id: string,  payload: Partial<IBlog>)=> {
    const {...blogData} = payload;
    const updateBlogData: Partial <IBlog> = {...blogData}

    const result = await Blog.findByIdAndUpdate({id}, updateBlogData, {
        new: true
    });
    return result
}

// delete blog
const deleteBlog = async(id: string)=> {
    const result = Blog.findByIdAndDelete(id);
    return result
}

// related blog
const relatedBlog = async(id: string)=> {
    const result = Blog.findById(id);
    
    return result
}

export const BlogService = {
    getAllBlog,
    createBlogPost,
    getSingleBlog,
    updateBlog,
    deleteBlog,
    relatedBlog
}
