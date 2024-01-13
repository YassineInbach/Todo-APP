import React, { useState } from "react";
import "../App.css";

function TodoForm({todos,setTodos}) {
  const [describe, setDescribe] = useState("");
  const [title, setTitle] = useState("");

  const HandleClick = () => {
    console.log("Saisir un title : ", title);
    console.log("Saisir un describe : ", describe);
    if (title === "" || describe === ""){
      alert("Remplir les champs de formulaire.");
      setDescribe('');
      setTitle('');
    }
     
    else {
      let newTodo = {
        Title: title,
        Describe: describe,
      };
      todos.push(newTodo);
      setTodos([...todos]);
      console.log(todos)
      setTitle('') ;
      setDescribe('');
    }
  };
  return (
    <div>
      <form action="">
        <div className="input">
          <label htmlFor="">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
          />
        </div>
        <div className="input">
          <label htmlFor="">Describe:</label>
          <input
            type="text"
            id="describe"
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
            placeholder="Enter your describe"
          />
        </div>
        <div className="btn">
          <button type="button" onClick={HandleClick}>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
