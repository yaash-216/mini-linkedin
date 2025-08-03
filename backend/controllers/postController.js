import Post from "../models/Post.js";
const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user._id,
      content: req.body.content,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

export { createPost, getAllPosts };
