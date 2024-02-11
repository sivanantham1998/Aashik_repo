const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

// middleware

const app=express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/11-2-2024",{useNewUrlParser:true,useUnifiedTopology:true})

const collection=mongoose.model("reactCurd",mongoose.Schema({
    name:String,
    email:String,
    password:String
}))

app.get("/",async function(req,res)
{
    let data=await collection.find();
    res.json(data)
})

app.post("/",async function(req,res)
{
    let data=await collection({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    data.save()
    res.json(data)
})

app.delete("/:id",async function(req,res)
{
    let {id}=req.params;
    let data=await collection.findByIdAndDelete(id);
    res.json("deleted")
})

app.put("/:id",async function(req,res)
{
    let {id}=req.params;
    let data=await collection.findById(id)
    data.name=req.body.name;
    data.email=req.body.email;
    data.password=req.body.password;

    data.save()
    res.json("updated")

})

app.listen(2001,()=>{
    console.log("Server connected")
})
