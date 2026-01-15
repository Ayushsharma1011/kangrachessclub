// backend/routes/announcementRoutes.js
import express from 'express';
import { getAnnouncement, updateAnnouncement } from '../controllers/announcementController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', getAnnouncement);
router.post('/update', verifyToken, updateAnnouncement);

export default router;
