const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

//@route POST api/users
//@desc Register a user
//@access Public

router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status('400').json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status('400').json({ msg: 'Email already exists' });
      }

      user = new User({
        name,
        email,
        password
      });
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(user.password, salt);
      await user.save();

      return res.json(user);
    } catch (error) {
      res.status('500').send('Server error');
      console.error(error.message);
    }
  }
);

module.exports = router;
