import User from "../models/User.js";
import jwt from "jsonwebtoken";
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const register = async (req, res) => {
  const { name, email, password, bio } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = await User.create({ name, email, password, bio });
    const token = generateToken(user._id);

    res
      .status(201)
      .json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          bio: user.bio,
        },
        token,
      });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    res.json({
      user: { id: user._id, name: user.name, email: user.email, bio: user.bio },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export { login, register };
