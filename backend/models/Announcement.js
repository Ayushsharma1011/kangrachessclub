// backend/models/Announcement.js
import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Announcement', announcementSchema);
