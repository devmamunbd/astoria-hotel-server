import { Model } from "mongoose"



export type IBlog = {
    title: string,
    description: string,
    content: string,
    coverImg: string,
    category: string,
    author: string,
    ratting: number
}


export type BlogModel = Model<IBlog>
