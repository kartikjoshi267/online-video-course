import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    courses: {
        type: Array,
        default: []
    }
}, { timestamps: true })

export default new mongoose.model("User", userSchema)