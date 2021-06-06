import mongoose, { mongo } from 'mongoose'

//this is for replicating required
const requiredString = {
    type: String,
    required: true
}

const userSchema = mongoose.Schema({
    name: requiredString,
    email: requiredString,
    password: requiredString,
    id: requiredString
})

export default mongoose.model("User", userSchema)

