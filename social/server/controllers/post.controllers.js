import uploadFile from "../config/cloudinary.js";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const uploadPost = async (req, res) => {
  try {
    // caption
  //mediaType
  // mediaUrl
  const { mediaType, caption } = req.body;

  let mediaUrl = "";
  if (req.file) {
    mediaUrl = await uploadFile(req.file.path);
    console.log(mediaUrl)
  } else {
    return res.status(400).json({ message: "No Media Added" });
  }

  // create the post

  const post = await Post.create({ mediaType, caption, mediaUrl, author:req.userId });
  return res.status(201).json(post);

  // userName
  // profileImage
  } catch (error) {
    res.status(500).json({message:`Cannot Upload$ ${error}`})
  }
  
};
