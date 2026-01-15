import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import galleryRoutes from './routes/galleryRoutes.js';
import adminRoutes from './routes/admin.js';
import announcementRoutes from './routes/announcementRoutes.js';
import dashboardRoutes from './routes/protected.js'; // your file name here
import protectedRoutes from './routes/protected.js';
import submissionRoutes from './routes/submissionRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/protected', protectedRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin', dashboardRoutes); // must match prefix

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.error(err));
