import "../App.css";
import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
function TodoInfo({ todos, setTodos, edit, setEdit, setTitle, setDescribe }) {
  const handleEdit = (item) => {
    setEdit(item); // Utilisez l'objet entier de la tâche à éditer
  };

  const handleDelete = (index) => {
    // Create a copy of the todos array
    const updatedTodos = [...todos];
    // Remove the todo at the specified index
    updatedTodos.splice(index, 1);
    // Update the state with the new todos array
    setTodos(updatedTodos);
    console.log(updatedTodos);
    setEdit(null);
    setTitle("");
    setDescribe("");
  };
  useEffect(() => {
    console.log("edit");
  }, [edit]);

  return (
    <div className="scrollBar">
      {todos.map((item, index) => (
        <div className="parent-info" key={index}>
          <div className="context">
            <h3>{item.Title} :</h3>
            <p>{item.Describe}</p>
          </div>
          <div className="icons">
            <FaRegEdit id="Fa-edit" onClick={() => handleEdit(item)} />
            <MdDeleteOutline
              id="Md-delete"
              onClick={() => handleDelete(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoInfo;
