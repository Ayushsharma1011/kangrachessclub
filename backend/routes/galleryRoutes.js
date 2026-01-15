import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import {
  getAllImages,
  uploadImage,
  deleteImage
} from '../controllers/galleryController.js';

const router = express.Router();

// Public (or use verifyToken if you want it protected)
router.get('/all', getAllImages);

// Protected
router.post('/upload', verifyToken, uploadImage);
router.delete('/:id', verifyToken, deleteImage);

export default router;
