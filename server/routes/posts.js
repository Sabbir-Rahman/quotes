
import express from 'express';

const router = express.Router();

import {
    getPost,createPost,updatePost, deletePost, likePost,getPostsBySearch
} from '../controllers/posts.js'
import auth from '../middleware/auth.js'


router.get('/', getPost)
router.get('/search', getPostsBySearch)
router.post('/',auth, createPost)
router.patch('/:id',auth,updatePost)
router.delete('/:id',auth, deletePost)
router.patch('/:id/likePost',auth, likePost)

export default router
