const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/user.model');

const router = express.Router();


router.post('/signup', async (req, res) => {
  const { name, usernameOrEmail, password } = req.body;

  try {
    const existingUser = await User.findOne({ usernameOrEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'This email or username is already in use' });
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

  
    const newUser = new User({
      name, 
      usernameOrEmail,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/signin', async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    const user = await User.findOne({ usernameOrEmail });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Error during signin:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;