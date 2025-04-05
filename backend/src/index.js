import dotenv from 'dotenv'
import connectDB from './db/index.js';
import {app} from './app.js'

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