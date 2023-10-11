const express = require("express");
const ROUTER = require("./Router/router");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api",ROUTER);

const port = process.env.PORT ||8000;
const DB = process.env.DATABASE;
console.log(DB);

mongoose.connect(DB,{
    useNewUrlParser:true,
    dbName: "Human_Resource",
  })
    .then(()=>{
      console.log("Connected to MongoDB");
    })
    .catch((err)=>{
      console.log(err);
      console.log("Couldn't connect to MongoDB");
    })

app.listen(port,()=>{
    console.log(`server started on port: ${port}`);
});



