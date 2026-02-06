var validateNote = (req , res , next ) => {
    console.log(req.body);
    const {title , content} = req.body;
    if(!title || !content) {
        return res.status(404).json({"message" : "Invalid data"})
    }
    next();
};

module.exports =  validateNote;