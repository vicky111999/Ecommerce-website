 const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const  route  = require('./Routes/authroutes.js')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors({origin:"http://localhost:5173",methods:["GET","POST","PUT","DELETE"],credentials:true}))

app.use('/api',route)

const port = process.env.PORT || 3003

app.listen(port,()=>{
    console.log(`listening ${port}`)
})
