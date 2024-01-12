const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv').config();
const cors = require('cors');
const  cookieParser = require("cookie-parser")

// middlewares
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));

// router imports
const authRouter = require('./routers/auth');
const userRouter = require('./routers/user');
const mobileRouter = require('./routers/mobile');
const specsRouter = require('./routers/specs');
const cartRouter = require('./routers/cart');
const quantityRouter = require('./routers/quantity');


// routes
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/mobile',mobileRouter);
app.use('/api/specs',specsRouter);
app.use('/api/cart',cartRouter);
app.use('/api/quantity',quantityRouter);

// Database configuration
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("DB conencted."))
.catch((error)=>console.log(error))

// server configuration
app.listen(5000,()=>{
    console.log('server is running');
})