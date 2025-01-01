import { IComment } from "./comment.interface"
import { Comment } from "./comment.model"



// create comment
const createComment = async(comment: IComment)=> {
    const result = await Comment.create(comment);
    return result
}


// get comment
const getAllComment = async(comment: IComment)=> {
    const result = await Comment.find(comment);
    return result
}

export const CommentService = {
    createComment,
    getAllComment
}
