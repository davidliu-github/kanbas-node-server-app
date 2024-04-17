import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    _id:String,
    name: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: String,
    credits:Number,
    description: String,
})
export default courseSchema;