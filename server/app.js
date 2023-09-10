import express  from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import DefaultData from './defaultData.js';
import morgan from "morgan";
import cors from 'cors'
import router from './routes/router.js' 
import cookieParser from "cookie-parser";


dotenv.config();
connectDB();
DefaultData();

const app=express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser(""));
app.use(router)



app.get('/',(req,res)=>{
    res.end("hellow world")
})

const port=process.env.PORT;
app.listen(port,(req,res)=>{
    console.log(`server is runnning on port number ${port}`.bgGreen.bold)
})