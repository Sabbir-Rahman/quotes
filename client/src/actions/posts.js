import * as api from '../api/index.js'

// Action Creators
 export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch(error) {
        console.log(error.message)
    }   

}


export const createPost = (post) => async (dispatch) => {

    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data})
        
       
    } catch (error) {
        console.log(error)
    }

    window.location.reload();
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id,post)

        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error)
    }

    window.location.reload();
}


export const deletePost = (id) => async (dispatch) => {
    try {
        //we don't need to care about response
        await api.deletePost(id)

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}