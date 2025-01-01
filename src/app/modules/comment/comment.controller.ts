import { Request, Response } from "express";
import { CommentService } from "./comment.service";




// create comments
const createCommetns = async(req: Request, res: Response)=> {
    const comment = req.body;
    const result = await CommentService.createComment(comment)
    res.status(201).send({
        message: 'Comment Create SuccessFully',
        comment: result
    })
}

// get all comment
const getAllComments = async(req: Request, res: Response)=> {
    const comment = req.body;
    const result = await CommentService.getAllComment(comment);

    res.status(200).send({
        message: "All Comment Get SuccessFully",
        comment: result
    })
}



export const CommentController = {
    createCommetns,
    getAllComments
}
