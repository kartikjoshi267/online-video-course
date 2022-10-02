import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    videos: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    users_enrolled: {
        type: Array,
        default: []
    }

}, { timestamps: true })

export default new mongoose.model("Courses", courseSchema)