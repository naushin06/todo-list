import { React, useEffect } from "react";
import Todo from "./todo";
import { db } from "../firebase.mjs";
import { useState } from "react";
const TodoList = ({ todos, setTodos, filtered, database, setdatabase }) => {
const item=database;

let [statusbar,setStatusBar]=useState("all")
let [comp,setComp]=useState([]);
let answer=[];


  function onSnap() {
    console.log("kdmkljflkjflkhjflkhj");
    db.collection("todolist").onSnapshot(function (querySnapshot) {
      setdatabase(
        querySnapshot.docs.map((docs) => ({
          key: docs.id,
          id: docs.data().id,
          text: docs.data().text,
          completed: docs.data().completed,
        }))
      );
    })
  }
  console.log(database);
  useEffect(() => {
    onSnap();
  }, []);

  return (

    <div className="todo-container">
      <ul className="todo-list">
        {database.map((data) => (
          <Todo
            text={data.text}
            key={data.id}
            todo={data}
            todos={database}
            setTodos={setdatabase}
          ></Todo>
        ))}

      </ul>
    </div>
  );
};
export default TodoList;
