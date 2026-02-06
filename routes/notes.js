const express =  require('express');
const router =  express.Router();
const validateNote = require('../middleware/validateNote');
const {createNotes,getAllNotes} =  require('../controller/notes');

router.post('/createnote', validateNote, createNotes);
router.get('/getallnotes',getAllNotes)
module.exports =  router;