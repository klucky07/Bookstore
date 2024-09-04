import express from "express";
import mongoose from "mongoose";
import Book from "./db.js"
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app =express();
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{

});

app.use('/books',booksRoute)
mongoose
  .connect('mongodb+srv://khanlucky2020:yKAnXEZOJqZDRacW@cluster0.xjjyy1w.mongodb.net/Books-collection')
  .then(()=>{
    console.log("database connected")
    app.listen(3000);
  })
   .catch((error)=>{
  console.log(error)
   })

