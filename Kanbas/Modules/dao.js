import model from "./model.js";
export const createModule = (course) => {
    return model.create(course);
  }
export const findModuleById = (courseId) => model.findById(courseId);
export const deleteModule = (courseId) => model.deleteOne({ _id: courseId });
export const updateModule = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });

