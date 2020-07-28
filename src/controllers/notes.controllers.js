const notesCtrl = {};
const Note = require('../models/Note')

//add
notesCtrl.renderNotesForm = (req, res) => {

    res.render('note/new_notes');
}
// add post
notesCtrl.renderNewNote = async (req, res) => {
    /* const {title ,description} = req.body;
    const newNote = new Note({title ,description});
    await newNote.save() */
    const newNote = new Note();
    newNote.title = req.body.title;
    newNote.description = req.body.description;
    newNote.user = req.user.id
    newNote.save()
    req.flash('success_msg', 'added success')
    res.redirect('/notes');
}

//get All notes
notesCtrl.renderNotes = (req, res) => {
    Note.find({user : req.user.id}, function (err, allNote) {
        res.render('note/all_notes', { noteAll: allNote });

    }).sort({createdAt :'desc'})

}

//Edit Notes
notesCtrl.renderEditForm = async (req, res) => {
    await Note.findById(req.params.id, function (err, NoteEdit) {
        res.render('note/edit_notes', { NoteEdit: NoteEdit });
        console.log(NoteEdit)

    })

}

notesCtrl.updateNotes = (req, res) => {
    Note.findByIdAndUpdate(req.params.id, {
        $set: { title: req.body.title, description: req.body.description }
    },
        {
            new: true
        },
        function (err, NoteUpdate) {
            req.flash('success_msg', 'update success')

            res.redirect('/notes');

        })

}

notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'delete success')

    res.redirect('/notes');
    console.log(req.params.id)
}
module.exports = notesCtrl

