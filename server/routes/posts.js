const express = require('express')

const router = express.Router();

const {
    getPost
} = require('../controllers/posts')


router.get('/', getPost)

module.exports = router

