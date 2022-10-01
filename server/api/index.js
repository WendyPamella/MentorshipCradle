import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import menteeRoutes from "./routes/mentees.js"
import authRoutes from "./routes/auth.js"
import eventRoutes from "./routes/events.js"
import courseRoutes from "./routes/courses.js"

const app = express()
dotenv.config()
const connect=() =>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to MongoDb")
    })
    .catch((err)=>{
        throw err;
    })
}
app.use(express.json())
app.use("/api/auths", authRoutes)
app.use("/api/mentee", menteeRoutes)
app.use("/api/events", eventRoutes);
app.use("/api/courses", courseRoutes);

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
       success: false,
       status,
       message,
    })
})

app.listen(8800,()=>{
    connect()
    console.log("Connected to Server!")
})