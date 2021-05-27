const express = require('express')

const router = express.Router();

const {
    getPost,createPost
} = require('../controllers/posts.js')


router.get('/view', getPost)
router.post('/create', createPost)

module.exports = router

