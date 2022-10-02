import express from "express"
import cors from "cors"
import connectDB from "./db.js"
import authUser from "./routes/authUser.js"
import authInstructor from "./routes/authInstructor.js"
import courses from "./routes/courses.js"
import { config } from "dotenv"
import path from "path"

const app = express()
app.use(express.json())
app.use(cors())
connectDB()
config()

app.use('/authUser', authUser)
app.use('/authInstructor', authInstructor)
app.use('/courses', courses)
app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", (_, res)=>{
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        (err) => {
            if (err) {
                res.status(500).send(err)
            }
        }
    )
})

const port = process.env.PORT || 9002
app.listen(port, () => {
    console.log("BE started")
})