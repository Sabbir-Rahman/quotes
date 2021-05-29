
import mongoose from 'mongoose'
import PostMessage from '../model/postMessage.js'

export const getPost = async (req,res) => {

    const { id } = req.params;

    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    }catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createPost = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post)
    console.log('new post')
    console.log(newPost)

    try {
        await newPost.save()
        res.status(201).json({newPost})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req,res) => {
    const { id: _id} = req.params
    const post = req.body

    //check if the given id exist in the post
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')


    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post,_id}, { new: true})

    res.json(updatedPost)

}

export const deletePost = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    await PostMessage.findByIdAndRemove(id)

    res.json({message: ' Post Deleted Succesfully'})

}
