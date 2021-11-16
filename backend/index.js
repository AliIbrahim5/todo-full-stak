//1-Server build steps
// 2- execiton todo


const express =require('express')

const fs =require("fs")

const app =express()
const PROT = 5000;
app.use(express.json());

// step by step  one get == read
app.get("/read",(req, res, ) =>{
    fs.readFile('./todo.json',(ree,data)=>{
        const read=JSON.parse(data.toString())
        res.status(200).json(read)
    })

})



app.listen(PROT,()=>{
 console.log(`SERAVAR IS ON ${PROT}`);
});