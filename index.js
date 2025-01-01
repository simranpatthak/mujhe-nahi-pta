const express=require("express")
const connection=require("./db")
const userRoutes = require("./routes/user.routes")
require("dotenv").config()
const app=express()
app.set("view engine","ejs")
app.use(express.json())

app.use("/api/user",userRoutes)





app.listen(process.env.PORT,async()=>{
    try {
      await connection
      console.log("connected to db") 
      console.log(`server is running on port ${process.env.PORT}`) 
    } catch (error) {
        
    }
})