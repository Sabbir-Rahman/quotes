import axios from 'axios'

const url = 'http://localhost:5000/posts/view'

export const fetchPosts = () => axios.get(url)
