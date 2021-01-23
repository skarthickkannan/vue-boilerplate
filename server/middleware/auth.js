const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');

const auth = async (req, res, next) => {
  const token = req.header('token');
  if (!token) {
    res.status(400).json({
      success: false,
      message: 'Not authorized',
    });
  }
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  await User.findOne({ id: verified._id }).then((userData) => {
    req.user = userData;
    next();
  });
};

module.exports = auth;
