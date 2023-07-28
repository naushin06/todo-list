import axios from 'axios';
import React, { useEffect,useState } from 'react'
import AjaxPOST from './AjaxPOST';
import { db } from '../../firebase.mjs';
import AjaxDELETE from './AjaxDELETE';


const AjaxGET = ({database,setdatabase}) => {
const [deletedr,setdeletedr]=useState([]);

  function GETREQUES(){
    for(let i=0;i<=50;i++){
      axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then(function(response){
console.log(response);
      })
      .then(function(error){
//console.log(error);
      })
      .then(function(){
console.log("run");
      })

   }
   alert("get request done successfully . the GET data can be veiwed in console")
  }




  const data={
    text:"naushijkihk",
    completed:false,
    id:Math.random(),
    key:Math.random()
}
function POSTREQ(){


  console.log(database);
db.collection("todolist").add({
  text:data.text,
  completed:data.completed,
  id:data.id,
  key:Math.random()
})
AjaxPOST.post('/axoz.json',data).then(response=>{
  console.log(response);
})
}

function DELETE(){
  let randomkey;
database.map((item)=>{
  if(data.id===item.id){
   randomkey=item.key
   db.collection("todolist").doc(randomkey).delete();
  }
})
  console.log(data);
  axios.delete("https://tdlprojec-default-rtdb.firebaseio.com/axoz.json",{params:{id:randomkey}}).then(response=>{
      console.log(response);
  });
}
    return (
    <div>
      
      <button onClick={GETREQUES}>GET REQUEST</button>
    <button onClick={POSTREQ}>POST REQUEST</button>


    </div>
  )
}


axios.delete(`https://jsonplaceholder.typicode.com/todos/${3}`)
.then(res=>console.log("deleted successfully"))

export default AjaxGET

