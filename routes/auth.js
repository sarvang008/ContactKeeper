const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const router = express.Router();

//@route GET api/auth
//@desc gets loggedin user
//@access Private
//second parameter is the middleware
router.get('/', auth, async (req, res) => {
  // aysnc is used for mongoose functions
  try {
    const id = req.user.id; //we stored decoded.user in req.user in middlerware code
    user = await User.findById(id).select('-password');
    console.log(user);
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status('500').json({ msg: 'Server Error' });
  }
});

//@route POST api/auth
//@desc Auth user and get token
//@access Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter password ').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status('400').json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email }); //await since it returns promise
      if (!user) {
        return res.status('400').json({ msg: 'Invalid Credentials' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status('400').json({ msg: 'Invalid Credentials' });
      }
      const payload = {
        user: {
          id: user.id
        }
      };
      //jwt sign function gives token

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) {
            throw err;
          }
          return res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status('500').json({ msg: 'Server Error' });
    }
  }
);

module.exports = router;
