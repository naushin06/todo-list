import { useState } from "react";
import {React,useEffect}from "react";
import { db } from "../firebase.mjs";

const Form=({setdatabase,setInputText,todos,setTodos,inputText,statusbar,setStatusBar,database})=>{

  const InputHandler=(e)=>
{
  console.log(e.target.value);
  setInputText(e.target.value)
}
const submitHandler = (e) => {
e.preventDefault();

if(inputText.length<=0)
{
  return(
    alert("Enter your to-do item")
  )
}
else{
 alert("added suuccessfully")
 let idRan=Math.random()*1000
 const details={
  text:inputText,
  complete:false,
  id:idRan
 }
  setTodos([
    ...todos,{text:inputText, completed:false,id:idRan }
      ]
    )  
    console.log(details);
  try{
    db.collection("todolist").add({
      text:inputText,
      completed:false,
      id:idRan
    })
  }
  catch(err){
    console.log(err)
  }
}
setInputText("")
}

console.log(database);
console.log(todos);

 const [stat,setStat]=useState("all") 
const[comp,setComp]=useState([]);
const[uncomp,setunComp]=useState([])

const FunctionHandler=(value)=>{
  console.log("kfyuyufuyuycuyutxtucuxu");
  console.log(value);
  console.log(stat);

  database.map(todo=>{
  console.log(todo)
  if(todo.completed==true){
    console.log(todo.text)
    setComp([
      ...comp,{text:todo.text, completed:todo.completed,id:todo.id }
        ]
      )  
  }
})
}
console.log(comp)

function a(event){
  console.log("started")
  console.log(event);

 

}




return(
         <div id="formup" className="form">
<div className="f-1">
<p id="checkf" className="title"> Add a new task in the list</p>
</div>
<div className="f-2">
<input id="inf" placeholder="Enter your item here" value={inputText} onChange={InputHandler} type="text" className="todo-input" required/>
      <button id="inb" className="sbtn" onClick={submitHandler}type="submit">
     {/* <p className="sbtn">submit</p> */}
     SUBMIT </button>
</div>
   
    </div> 
)
    
}
export default Form;