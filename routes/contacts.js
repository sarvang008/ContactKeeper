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
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status('400').json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;

    try {
      const newcontact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newcontact.save();

      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status('500').send('Server Error');
    }

    // res.json({
    //   msg: 'hello from Contacts.js'
    // });
  }
);

//@route PUT api/contacts/:id
//@desc Update Contact
//@access Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;
  const contactfields = {};
  if (name) contactfields.name = name;
  if (email) contactfields.email = email;
  if (phone) contactfields.phone = phone;
  if (type) contactfields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status('404').send('Contact not found');
    }
    if (contact.user.toString() !== req.user.id) {
      //check if the id passed belongs to the user authenticated
      console.log('Unauthorised User');
      return res.status('401').send('Unauthorised user');
    }
    const upcontact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactfields },
      { new: true }
    );

    res.json(upcontact);
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
    const contactid = req.params.id;
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status('404').send('Contact not found');
    }
    if (contact.user.toString() !== req.user.id) {
      //check if the id passed belongs to the user authenticated
      console.log('Unauthorised User');
      return res.status('401').send('Unauthorised user');
    }
    await Contact.findByIdAndDelete(contactid);
    res.send(`Contact Removed with name ${contact.name} `);
  } catch (error) {
    console.error(error.message);
    res.status('500').send('Server Error');
  }

  // res.json({
  //   msg: 'Delete Contact '
  // });
});

module.exports = router;
