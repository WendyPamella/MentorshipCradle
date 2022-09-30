import express from "express"
import { createCourse, getCourses } from "../controllers/courses.js"

const router = express.Router();


//CREATE A Event
router.post("/", createCourse);
router.get("/", getCourses);






export default router;