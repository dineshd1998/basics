const express = require('express');

const app = express();

//Middleware
app.use(express.json());

const notes=[];


app.get("/",(req,res)=>{
    res.send("API is working");
})

app.get("/notes",(req,res)=>{
    res.json(notes);
})

app.post("/addnotes",(req,res)=>{
    const note=req.body;
    notes.push(note);
    res.status(201).json(note);
})

app.listen(3000, ()=>{
    console.log('server running on port 3000');
})

