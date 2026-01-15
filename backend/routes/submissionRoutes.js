import express from 'express';
import {
  getAllSubmissions,
  approveSubmission,
  deleteSubmission,
  createSubmission,
} from '../controllers/submissionController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import UserSubmission from '../models/UserSubmission.js'; // ✅ Correct import

const router = express.Router();

// Public route
router.post('/submit', createSubmission);

// Admin routes
router.get('/pending', verifyToken, async (req, res) => {
  try {
    const pending = await UserSubmission.find({ approved: false }); // ✅ Correct usage
    res.json(pending);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put('/approve/:id', verifyToken, approveSubmission);
router.delete('/:id', verifyToken, deleteSubmission);

export default router;
