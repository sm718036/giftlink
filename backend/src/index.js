import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/index.js';

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

connectDB()
.then(()=>{
  app.listen(port, ()=>{
    console.log("Server is running on http://localhost:" + port)
  })
})
.catch((error)=>{
  console.log("MongoDB connection failed !!!", error)
})