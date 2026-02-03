var validateNote = (req , res , next ) => {
    console.log(req.body);
    const {title , id} = req.body;
    if(!title || !id) {
        return res.status(404).json({"message" : "Invalid data"})
    }
    next();
};

module.exports =  validateNote;