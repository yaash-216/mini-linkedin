import User from "../models/User.js";
import Post from "../models/Post.js";
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const posts = await Post.find({ user: user._id }).sort({ createdAt: -1 });
    res.json({ user, posts });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch profile' });
  }
};

export {getProfile};