const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const Contact = require('../models/contact');
const auth = require('../middleware/auth');
//@route GET api/contacts
//@desc gets users contact
//@access Private

router.get('/', auth, async (req, res) => {
  //auth is middleware that will authenticate so user can only see his contacts

  const userid = req.user.id; //gets from auth middleware

  try {
    const contacts = await Contact.find({ user: userid }).sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status('500').send('Server Error');
  }
});

//@route POST api/contacts
//@desc Add new  contact
//@access Private
router.post('/', [auth, []], async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status('500').send('Server Error');
  }

  // res.json({
  //   msg: 'hello from Contacts.js'
  // });
});

//@route PUT api/contacts/:id
//@desc Update Contact
//@access Private
router.put('/:id', auth, async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status('500').send('Server Error');
  }

  // res.json({
  //   msg: 'Update Contacts'
  // });
});

//@route DELETE api/contacts/:id
//@desc delete Contact
//@access Private
router.delete('/:id', auth, async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status('500').send('Server Error');
  }

  // res.json({
  //   msg: 'Delete Contact '
  // });
});

module.exports = router;
