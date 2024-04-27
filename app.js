const { request } = require('express');
const express = require('express');
const dbconnect = require('./config');
const modelUser = require('./userModel');
const app = express();
const router = express.Router();

app.use(router);
app.use(express.json());

//CRUD - Create, Read, Update, Delete
router.post("/", async (req, res)=>{
    const body = req.body;
    const response = await modelUser.create(body);
    res.send(response);
})

router.get("/", async (req, res)=>{
    const response = await modelUser.find({});
    res.send(response);
})

router.get("/:id", async (req, res)=>{
    const id = req.params.id;
    const response = await modelUser.findById(id);
    res.send(response);
})

router.put("/:id", async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const response = await modelUser.findOneAndUpdate({_id:id}, body);
    res.send(response);
})

router.delete("/:id", async (req, res)=>{
    const id = req.params.id;
    const response = await modelUser.deleteOne({_id:id});
    res.send(response);
})

app.listen(3000, ()=>{
    console.log("El servidor se encuentra en el puerto 3000.");
})

dbconnect();