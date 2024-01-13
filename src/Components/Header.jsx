import React from 'react'
import '../App.css'
function Header({header}) {
  return (
    <div className='title'>
        <h1 style={{color : header ? "#ffffff" : " "}}>ToDoList</h1>
        <div className="line" style={{background : header ? "#ffffff" : " "}}>
        </div>
    </div>
  )
}

export default Header