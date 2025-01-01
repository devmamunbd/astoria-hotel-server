import express from 'express'
import { CommentController } from './comment.controller';
const router = express.Router()

// get comments
router.post('/create-comment', CommentController.createCommetns)

// get all comments
router.get('/', CommentController.getAllComments)


export const commentRoutes = router;
