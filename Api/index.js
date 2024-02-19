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
const addressRouter = require('./routers/address');
const reviewRouter = require("./routers/review");
const orderRouter = require("./routers/order");


// routes
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/mobile',mobileRouter);
app.use('/api/specs',specsRouter);
app.use('/api/cart',cartRouter);
app.use('/api/quantity',quantityRouter);
app.use('/api/address',addressRouter);
app.use('/api/review',reviewRouter);
app.use('/api/order',orderRouter);

// Database configuration
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("DB conencted."))
.catch((error)=>console.log(error))

// server configuration
app.listen(process.env.PORT,()=>{
    console.log('server is running');
})