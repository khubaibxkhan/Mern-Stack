const express = require("express");

const app = express();
const PORT = 8000;

const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");

//Connections
connectMongoDb('mongodb://127.0.0.1:27017/mock-data-1').then(() =>
    console.log("mongodb connected!!"));

//Schema


//middleware-plugin
app.use(express.urlencoded({extended: true}));
//log-file
app.use(logReqRes("log.txt"));


//routes

app.use("/api/users" , userRouter);

app.listen(PORT , ()=> console.log(`Server started at PORT: ${PORT}`));