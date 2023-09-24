// routes/auth.js
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Route to register users
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    // const user = await User.create({ fullname, email, password: hashedPassword })
    await user.save();
    res.status(201).
    json({ 
      message: 'User registration successfully',
      data: user
    });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Route to login users by username or email and password
router.post('/login', async (req, res) => {
  try {
    const { username, email, password } = req.body;

     // Check if the user exists by email
     const user = await User.findOne({ email });

     // If the user doesn't exist by email, try finding by username
     if (!user && username) {
       user = await User.findOne({ username });
     }

    if (!user) {
      return res.status(401).json({ error: 'Wrong Password or Email' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Wrong Password or Email' });
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '2h' });
    res.status(200).json({
      status: "success",
       token: token,
      });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
});

// Route to get user by ID
router.get('/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user by their ID in the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });

  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    res.status(200).json({
      status: "success",
      data: users,
    });

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
