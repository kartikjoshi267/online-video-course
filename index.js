import express from "express"
import cors from "cors"
import connectDB from "./db.js"
import authUser from "./routes/authUser.js"
import authInstructor from "./routes/authInstructor.js"
import courses from "./routes/courses.js"
import { config } from "dotenv"
import path from "path"
const __dirname = path.resolve();

const app = express()
app.use(express.json())
app.use(cors())
connectDB()
config()

app.use('/authUser', authUser)
app.use('/authInstructor', authInstructor)
app.use('/courses', courses)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}
else{
    app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
    });
}

const port = process.env.PORT || 9002
app.listen(port, () => {
    console.log("BE started")
})
