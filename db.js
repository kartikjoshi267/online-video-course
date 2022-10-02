import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("DB connected")
    })
}

export default connectDB