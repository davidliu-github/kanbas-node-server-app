import schema from "./schema.js";
import mongoose from "mongoose";

const model = mongoose.model("ModuleModel", schema);
export default model;