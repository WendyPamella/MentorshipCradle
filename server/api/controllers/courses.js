import mongoose from "mongoose"
import bcrypt from 'bcryptjs';
import {createError}  from '../errors.js';
import Course from "../models/Course.js"

export const createCourse = async (req,res,next)=>{
    const newCourse= new Course(req.body);
    try{
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    }catch(err){
        next(err);
    }
}
export const getCourses = async (req, res, next) =>{
    try{
        const courses = await Course.find()
        res.status(200).json(courses)
    }catch(err){
     next(err)
    }
}

// export const menteesignin = async(req,res, next)=>{
//     try{
//         const mentee = await Mentee.findOne({email: req.body.email});
//         if(!mentee){
//             return next(createError(404, "User not found"));
//         }
//         const isPasswordValid = await bcrypt.compare(req.body.password, mentee.password);
//         if(!isPasswordValid){
//             return next(createError(400, "Invalid credentials"));
//         }
//         const token = jwt.sign({_id: mentee._id}, process.env.JWT_SECRET);
//         const {password , ...userWithoutPassword} = mentee.toObject();
//         res
//         .cookie("access_token", token, {
//             httpOnly: true
//         })
//         .status(200)
//         .json(userWithoutPassword);
        
//      }catch(err){
//         next(err);
//     }
// }

// export const mentorsignup = async(req,res)=>{
//     try{
//         const mentor = await Mentor.findOne({email: req.body.email});
//         if(mentor){
//             res.status(404).send(400,"Email exist!");
//         }
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypt.hashSync(req.body.password, salt);
//         const newMentor = new Mentor({...req.body, password: hash})

//         await newMentor.save();
//         res.status(200).send("Mentor's Account has been created!");
//     }catch(err){

//     }
// }

// export const mentorsignin = async(req,res, next)=>{
//     try{
//         const mentor = await Mentor.findOne({email: req.body.email});
//         if(!mentor){
//             return next(createError(400, "User not found"));
//         }
//         const isPasswordValid = await bcrypt.compare(req.body.password, mentor.password);
//         if(!isPasswordValid){
//             return next(createError(400, "Invalid credentials"));
//         }
//         const token = jwt.sign({_id: mentor._id}, process.env.JWT_SECRET);
//         const {password , ...userWithoutPassword} = mentor.toObject();
//         res
//         .cookie("access_token", token, {
//             httpOnly: true
//         })
//         .status(200)
//         .json(userWithoutPassword);
        
//      }catch(err){
//         next(err);
//     }
// }