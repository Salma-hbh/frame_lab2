import express from 'express';
import mongoose from "mongoose";

const items= require('./routes/api/items')
const app = express();
app.use(express.json());
const db = require('./config/key').mongoURI;

//connect to mongo
mongoose
        .connect(db)
        .then( ()=> console.log('Connected...'))
        .catch( err => console.log(err));

//Use routes
app.use('/api/items', items);

const port= process.env.PORT || 5000;
app.listen(port, ()=> console.log('Server started on port 5000'));