const notes=[
    {
        "title":"Get me a cup of coffee",
        "id":1
    },
    {
        "title":"Get me a cup of tea",
        "id":2
    },
    {
        "title":"Get me a cup of boost",
        "id":3
    },
    {
        "title":"Get me a cup of horlicks",
        "id":4
    }
];

exports.getAllNotes = (req , res) =>{
    res.status(200).json(notes);
}

exports.getNoteById = (req , res) => {
    const noteId = Number(req.params.id);
    const note1 = notes.find(n=>n.id === noteId);
    const note2 = notes.filter(n => n.id === noteId);
    if(!note1) {
        res.status(404).json({message:"Data not found"});
    }
    if(!note2) {
         res.status(404).json({message:"Data not found"});
    }
    res.json(note1);
    // res.json(note2);
}

exports.createNotes = (req , res) =>{
    const {title , id} = req.body;
    const newNote = {
        "title":title,
        "id" : id
    }
    notes.push(newNote);
    res.status(201).json(notes);
}

// exports.updateNotes =  (req , res) => {
    
// }