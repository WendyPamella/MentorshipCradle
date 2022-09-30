import mongoose from "mongoose";

const MenteeSchema = new mongoose.Schema({
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
    campus: {
        type: String,
        required: true,
    },
    // course: {
    //     type: String,
    //     required: true,
    // },
    img: {
        type: String,
    },
}, {timestamps: true}
);

export default mongoose.model("Mentee", MenteeSchema);