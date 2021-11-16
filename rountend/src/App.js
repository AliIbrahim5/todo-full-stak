import './App.css';
import axios from 'axios'
import React,{useEffect,useState}from 'react'


function App() {
const BACKEND_URL = "http://localhost:5000/read";
    const [todo, setTodo] = useState([])
    const rendar=async ()=>{
      const data = await axios.get(BACKEND_URL).then((data)=>{setTodo(data.data)})
      
    }
    
   
    useEffect(() => {
      rendar()
    }, [])

  
  return (
    <div >
{console.log(todo)}
      <ul>{todo.map((item)=>{
return(
<>
<li>{
item.name}
</li>
<h1>{item.id}</h1>
</>
)
      })}</ul>
    </div>
  );
}

export default App;
