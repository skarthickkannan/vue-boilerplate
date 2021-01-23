const express = require('express');
const router = express.Router();
const User = require('../model/UserModel');
const { registerSchema, loginSchema } = require('../validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
  let { username, email, password } = req.body;

  await registerSchema.validateAsync({
    username: username,
    password: password,
    email: email,
  });

  const emailExists = await User.findOne({ email: email });
  if (emailExists) {
    res.status(400).send({
      success: false,
      message: 'Email is already taken',
    });
  }
  const usernameExists = await User.findOne({ username: username });
  if (usernameExists) {
    res.status(400).send({
      success: false,
      message: 'Username is already taken',
    });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
      const newPost = await new User({
        username: username,
        email: email,
        password: hashPassword,
      });

      await newPost.save();

      res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  }
});

router.post('/login', async (req, res) => {
  let { email, password } = req.body;

  await loginSchema.validateAsync({
    email: email,
    password: password,
  });

  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(400).send({
      success: false,
      message: 'Email doesnt exists',
    });
  } else {
    try {
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: '48h',
      });
      res.status(200).json({
        success: true,
        token,
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  }
});

router.get('/current', auth, (req, res) => {
  req.user.password = undefined;
  req.user.email = undefined;
  res.json({
    id: req.user._id,
    username: req.user.username,
  });
});

module.exports = router;
