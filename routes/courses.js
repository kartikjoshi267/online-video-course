import { Router } from "express"
import Course from "../models/CourseModel.js"
const router = Router()

router.post("/getallcourses", async (req, res) => {
    try{
        const courses = await Course.findAll()
        res.status(200).send({ courses: courses })
    }
    catch(error){
        return res.status(500).send({ message: "Internal Server error occured" });
    }
})

export default router