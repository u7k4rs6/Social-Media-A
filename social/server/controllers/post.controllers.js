import uploadFile from "../config/cloudinary.js";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const uploadPost = async (req, res) => {
  const { mediaType, caption } = req.body;

  let mediaUrl = "";

  if (req.file) {
    mediaUrl = await uploadFile(req.file.path);
    console.log(mediaUrl);
  } else {
    return res.status(400).json({ message: "No media Selected" });
  }

  const post = await Post.create({
    mediaType,
    caption,
    mediaUrl,
    author :req.userId
  })

  const user = await User.findOne(req.userId).populate('posts')

  user.posts.push(post._id)

  await user.save()


  const populatedPost = await Post.findById(post._id).populate('author' ,'userName name profileImage' )


  console.log(post);
  return res.status(201).send(populatedPost);
};
