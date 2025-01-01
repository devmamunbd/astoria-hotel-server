import { Model, Types } from "mongoose";


export type IComment = {
    comment: string;
    user: Types.ObjectId;
    postId: Types.ObjectId;

}


export type CommentModel = Model<IComment>
