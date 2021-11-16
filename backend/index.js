//1-Server build steps
// 2- execiton todo


const express =require('express')

const fs =require("fs")

const app =express()
const PROT = 5000;
app.use(express.json());

// step by step  one get == read
app.get("/read",(req, res, ) =>{
    fs.readFile('./todo.json',(err,data)=>{
        const read=JSON.parse(data.toString())
        res.status(200).json(read)
    })

})

// step by step   writeFile


function addtodo(read){
    fs.writeFile('./todo.json',JSON.stringify(read),()=>{
        console.log('done add to todo');
    })
}



/// get creat 
app.post("/addtotodo",(req,res)=>{
    const {name} =req.body
    fs.readFile('./todo.json',(err,data)=>{
        const newtodo =JSON.parse(data.toString());
        newtodo.push({id:newtodo.length +1, name,isdelet:false,isupdeat: false})
        addtodo(newtodo);
        res.status(200).json(newtodo);    
    })
})






app.listen(PROT,()=>{
 console.log(`SERAVAR IS ON ${PROT}`);
});



