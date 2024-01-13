import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import ThemeTodo from "./Components/ThemeTodo";
import TodoForm from "./Components/TodoForm";
import TodoInfo from "./Components/TodoInfo";

function App() {
  const [todos, setTodos] = useState([]);
  const [header , setHeader] = useState(false);
  return (
    <div className="App">
      <Header header = {header} setHeader= {setHeader} />
      <div className="form-todo">
        <TodoForm setTodos={setTodos} todos={todos} />
        <div className="background">
          <TodoInfo todos={todos} setTodos={setTodos
          } />
        </div>
        <ThemeTodo setHeader={setHeader} />
      </div>
    </div>
  );
}

export default App;
