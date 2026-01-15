// backend/controllers/announcementController.js
import Announcement from '../models/Announcement.js';

export const getAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findOne();
    if (!announcement) {
      return res.json({ title: '', content: '' });
    }
    res.json(announcement);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateAnnouncement = async (req, res) => {
  try {
    const { title, content } = req.body;
    let announcement = await Announcement.findOne();

    if (announcement) {
      announcement.title = title;
      announcement.content = content;
      announcement.updatedAt = Date.now();
    } else {
      announcement = new Announcement({ title, content });
    }

    await announcement.save();
    res.json({ message: 'Announcement updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update announcement' });
  }
};
