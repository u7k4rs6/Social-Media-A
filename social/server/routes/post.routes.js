import express from 'express'
import { uploadPost } from '../controllers/post.controllers.js'
import { upload } from '../middlewares/multer.js'
import isAuth from '../middlewares/isAuth.js'



const postRouter = express.Router()


postRouter.post('/uploadPost',isAuth , upload.single('mediaUrl'), uploadPost )




export default postRouter