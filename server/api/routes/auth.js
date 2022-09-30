import express from "express"
import { menteesignup, menteesignin, mentorsignup, mentorsignin } from "../controllers/auth.js"

const router = express.Router();


//CREATE A MENTEE
router.post("/menteesignup", menteesignup)

//SIGN IN AS MENTEE
router.post("/menteesignin", menteesignin)

//CREATE A MENTEE
router.post("/mentorsignup", mentorsignup) 

//SIGN IN AS MENTEE
router.post("/mentorsignin", mentorsignin)




export default router;