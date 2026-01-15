import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/dashboard', verifyToken, (req, res) => {
  try {
    res.json({
      message: 'Welcome to Admin Dashboard!',
      adminId: req.user.id, // ✅ confirm req.user exists
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
