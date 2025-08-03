import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';        
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import profileRoutes from './routes/profile.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/profile', profileRoutes);

connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
