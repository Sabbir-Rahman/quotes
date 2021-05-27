const PostMessage = require('../model/postMessage')

const getPost = async (req,res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json({data:postMessage})
    }catch (error) {
        res.status(404).json({ message: error.message})
    }
}

const createPost = async (req,res) => {
    try {
        await newPost.save()
        res.status(201).json({data: newPost})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

module.exports = {
    getPost,
    createPost
}