import React,{ useState,useEffect } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';
import Completed from './components/completed';
import CompletedList from './components/completed';
  import AjaxGET from './components/node_learning/AjaxGET'
function App() {
const[inputText,setInputText]=useState("");
const[todos,setTodos]=useState([]);
const[statusbar,setStatusBar]=useState("all");
const[filtered, setFiltered]=useState([]);
const [database,setdatabase]=useState([])
const[comp,setcomp]=([])

useEffect(()=>{
  
  FunctionHandler();
 },[todos,statusbar]);
 
 const FunctionHandler = ()=>{ 
console.log(todos)


 }




 
//  const FunctionHandler = (statusbar)=>{ 

// console.log("rh"+statusbar)



  return (
<div className="App">
  <Form  statsbar={statusbar} database={database} setdatabse={setdatabase} setStfatusBar={setStatusBar} setInputText={setInputText}  todos={todos} setTodos={setTodos} inputText={inputText} />
 
<h6 className='ITEMS'>LIST</h6> 
  <TodoList todos={todos} setTodos={setTodos} filtered={filtered} database={database} setdatabase={setdatabase} />
</div>
    );
}
export default App;
