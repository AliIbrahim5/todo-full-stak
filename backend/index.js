//1-Server build steps
// 2- execiton todo


const express =require('express')

const app =express()
const PROT = 5000;
app.use(express.json());



app.listen(PROT,()=>{
 console.log(`SERAVAR IS ON ${PROT}`);
});