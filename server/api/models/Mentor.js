import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    position: {
        type: String,
    },
    // company: {
    //     type: String,
    // },
    img: {
        type: String,
    },
}, {timestamps: true}
);

export default mongoose.model("Mentor", MentorSchema);