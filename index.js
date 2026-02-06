const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
//Middleware
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB Connected'))
    .catch((err)=>console.log(err));

const noteRoutes = require('./routes/notes');
app.use('/notes',noteRoutes);
app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`);
})

