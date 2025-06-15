const express = require('express');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// GET /api/protected/profile
router.get('/profile', protect, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
