const Note = require('../model/notes');
// const notes=[
//     {
//         "title":"Get me a cup of coffee",
//         "id":1
//     },
//     {
//         "title":"Get me a cup of tea",
//         "id":2
//     },
//     {
//         "title":"Get me a cup of boost",
//         "id":3
//     },
//     {
//         "title":"Get me a cup of horlicks",
//         "id":4
//     }
// ];

exports.getAllNotes = async (req , res) =>{
    try {
        let notes = await Note.find();
        res.status(201).json(notes);
    }
    catch(error) {
        res.status(500).json({"message":error})
    }
}

// exports.getNoteById = (req , res) => {
//     const noteId = Number(req.params.id);
//     const note1 = notes.find(n=>n.id === noteId);
//     const note2 = notes.filter(n => n.id === noteId);
//     if(!note1) {
//         res.status(404).json({message:"Data not found"});
//     }
//     if(!note2) {
//          res.status(404).json({message:"Data not found"});
//     }
//     res.json(note1);
//     // res.json(note2);
// }

exports.createNotes = async (req , res) =>{
    try {
            const {title , content } = req.body;
            const note = await Note.create({title , content})
            res.status(201).json(note);
    }
    catch(error) {
        res.status(500).json({"message":error.message})

    }
}





// exports.updateNotes =  (req , res) => {
    
// }