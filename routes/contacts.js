const express = require('express');
const router = express.Router();

//@route GET api/contacts
//@desc gets users contact
//@access Private
router.get('/', (req, res) => {
  res.json({
    msg: 'get all contacts'
  });
});

//@route POST api/contacts
//@desc Add new  contact
//@access Private
router.post('/', (req, res) => {
  res.json({
    msg: 'hello from Contacts.js'
  });
});

//@route PUT api/contacts/:id
//@desc Update Contact
//@access Private
router.put('/:id', (req, res) => {
  res.json({
    msg: 'Update Contacts'
  });
});

//@route DELETE api/contacts/:id
//@desc delete Contact
//@access Private
router.delete('/:id', (req, res) => {
  res.json({
    msg: 'Delete Contact '
  });
});

module.exports = router;
