import mongoose, { Mongoose } from "mongoose";

const storySchema = new mongoose.Schema({
  
} , {timestamps:true});

const Story = mongoose.model("story", storySchema);

export default Story;
