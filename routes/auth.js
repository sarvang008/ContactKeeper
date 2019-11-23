const express = require('express');

const router = express.Router();

//@route GET api/auth
//@desc gets loggedin user
//@access Private
router.get('/', (req, res) => {
  res.json({
    msg: 'hello from auth.js'
  });
});
//@route POST api/auth
//@desc Auth user and get token
//@access Public
router.post('/', (req, res) => {
  res.send('Log in USer');
});
module.exports = router;
