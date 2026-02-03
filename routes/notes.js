const express =  require('express');
const router =  express.Router();
const validateNote = require('../middleware/validateNote');
const {getAllNotes ,  getNoteById , createNotes} =  require('../controller/notes');

router.get('/getallnotes' , getAllNotes);
router.get('/getnotebyid/:id', getNoteById);
router.post('/createnote', validateNote, createNotes);

module.exports =  router;