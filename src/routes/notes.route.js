const express = require('express');
const router = express.Router();
const { renderNotesForm ,renderNewNote ,renderNotes ,renderEditForm ,updateNotes ,deleteNotes} =require('../controllers/notes.controllers')
const {isAuthenticated} = require('../helpers/auth')

//add
router.get('/notes/add',isAuthenticated, renderNotesForm);
router.post('/notes/new-note',isAuthenticated, renderNewNote);

//get
router.get('/notes',isAuthenticated, renderNotes);

//update
router.get('/notes/edit/:id',isAuthenticated, renderEditForm);
router.put('/notes/edit/:id',isAuthenticated, updateNotes);

//delete
router.delete('/notes/delete/:id',isAuthenticated, deleteNotes);
module.exports =router