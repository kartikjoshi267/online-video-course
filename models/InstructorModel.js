import mongoose from "mongoose"

const instructorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    courses: {
        type: Array,
        default: []
    }
}, { timestamps: true })

export default new mongoose.model("Instructor", instructorSchema)