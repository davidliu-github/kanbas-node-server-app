import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    module: String
  });
const moduleSchema = new mongoose.Schema({
    _id:String,
    name: { type: String, required: true, unique: true },
    description: String,
    course:String,
    lessons: [lessonSchema]
})
export default courseSchema;