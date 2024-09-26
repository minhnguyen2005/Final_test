import express from 'express';
import jwt  from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const router = express.Router();
import User from '../models/User';

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
  res.json({ token });
});

router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

export default router;
