const express = require('express');
const app = express();
//Middleware
app.use(express.json());
const noteRoutes = require('./routes/notes');
app.use('/notes',noteRoutes);


app.listen(3000, ()=>{
    console.log('server running on port 3000');
})

