import express from 'express';
const router = express.Router();
import { createPost, getAllPosts } from '../controllers/postController.js';
import { authorization } from '../middleware/authMiddleware.js';

router.post('/', authorization, createPost);
router.get('/', getAllPosts);

export default router;
