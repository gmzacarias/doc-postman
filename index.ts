import * as express from "express";

const app = express()
const port = process.env.PORT || 3002;

//endpoints

//obtener usuario
app.get("/users",(req,res)=>{
    res.json({
        users:[]
    });
});

//crear usuario
app.post("/users",(req,res)=>{
    res.status(201).json({
message:"ok",
id:1234,
    });
});

//recuperar productos de un usuario
app.get("/users/:userId/products",(req,res)=>{
    res.json({
        products:[]
    });
});

app.listen(port,()=>{
    console.log("api corriendo en ", port)
})