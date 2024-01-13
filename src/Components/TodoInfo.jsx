import "../App.css"
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from "react-icons/md"
function TodoInfo({todos,setTodos}) {

  const handleDelete = (index) => {
    // Create a copy of the todos array
    const updatedTodos = [...todos];
    // Remove the todo at the specified index
    updatedTodos.splice(index, 1);
    // Update the state with the new todos array
    setTodos(updatedTodos);
    console.log(updatedTodos)

  };
  return (
    <div className="scrollBar">
      {
        todos.map((value,index) => (
          <div className="parent-info" key={index}>
          <div className="context">
             <h3>{value.Title} :</h3>
             <p>{value.Describe}</p>
          </div>
          <div className="icons">
              <FaRegEdit id="Fa-edit" />
              <MdDeleteOutline id="Md-delete" onClick={() => handleDelete(index)} />
          </div>
      </div>
        ))
      }
     
    </div>
  )
}

export default TodoInfo