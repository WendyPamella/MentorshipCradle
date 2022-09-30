import express from "express"
import { createEvent, getEvents } from "../controllers/events.js"

const router = express.Router();


//CREATE A Event
router.post("/", createEvent);
router.get("/", getEvents);






export default router;