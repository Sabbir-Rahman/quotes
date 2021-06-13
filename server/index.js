
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js'

const app = express();
dotenv.config()

//for parsing the data 
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())


//setting up the routes
app.use('/posts',postRoutes)
app.use('/users', userRoutes)

app.get('/', (req,res) => {
    res.send('Hello to Quotes API')
})

const PORT = process.env.PORT 
const URL = 'mongodb+srv://sabbir:sabbir@cluster0.mmfp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)
