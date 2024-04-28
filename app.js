const express = require('express');
const dbconnect = require('./config');
const modelUser = require('./userModel');
const app = express();
const router = express.Router();

//app.use(router);
app.use(express.json());
app.use(require("body-parser").json());

//CRUD - Create, Read, Update, Delete
app.post("/", async (req, res)=>{
    const body = req.body;
    const response = await modelUser.create(body);
    res.send(response);
})

app.get("/", async (req, res)=>{
    const response = await modelUser.find({});
    res.send(response);
})

app.get("/:id", async (req, res)=>{
    const id = req.params.id;
    const response = await modelUser.findById(id);
    res.send(response);
})

app.put("/:id", async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const response = await modelUser.findOneAndUpdate({_id:id}, body);
    res.send(response);
})

app.delete("/:id", async (req, res)=>{
    const id = req.params.id;
    const response = await modelUser.deleteOne({_id:id});
    res.send(response);
})

app.listen(3000, ()=>{
    console.log("El servidor se encuentra en el puerto 3000.");
})

dbconnect();