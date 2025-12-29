
import express from "express";
const app=express();
app.use(express.json());
    app.get("/",(req,res)=>{
        res.send("Hello");

});

app.post("/create",(req,res)=>{
    const data=req.body;
    res.json(data);
})

app.put("/user",(req,res)=>{
  res.send("hello world");
})
app.delete("/del",(req,res)=>{
  res.send("delete from server");

})
app.listen("5001", () => {
  console.log("server is running on your port number");
});