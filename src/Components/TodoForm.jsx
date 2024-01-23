import React, { useEffect } from "react";
import "../App.css";

function TodoForm({
  todos,
  setTodos,
  edit,
  setEdit,
  setTitle,
  title,
  setDescribe,
  describe,
}) {
  // const [describe, setDescribe] = useState("");
  // const [title, setTitle] = useState("");

  const Ftitle = React.useRef();
  const Ldescribe = React.useRef();

  useEffect(() => {
    if (edit !== null) {
      setTitle(edit.Title);
      setDescribe(edit.Describe);
      Ftitle.current.focus();
    } else {
      Ftitle.current.focus();
    }
  }, [edit]);

  const generateUniqueId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const HandleClick = (e) => {
    e.preventDefault();

    if (title === "" || describe === "") {
      alert("Remplir les champs de formulaire.");
      setTitle("");
      setDescribe("");
    } else {
      let newTodo = {
        id: edit !== null ? edit.id : generateUniqueId(), // Utilisez un générateur d'identifiants uniques
        Title: title,
        Describe: describe,
      };

      if (edit !== null) {
        setTodos((prevTodos) =>
          prevTodos.map((task) => (task.id === edit.id ? newTodo : task))
        );
      } else {
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
      }

      setEdit(null);
      setTitle("");
      setDescribe("");
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
            //onKeyDown={titleInput()}
            onChange={(e) => setTitle(e.target.value)}
            ref={Ftitle}
            placeholder="Enter your title"
          />
        </div>
        <div className="input">
          <label htmlFor="">Describe:</label>
          <input
            type="text"
            id="describe"
            ref={Ldescribe}
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
            placeholder="Enter your describe"
          />
        </div>
        <div className="btn">
          <button type="submit" onClick={HandleClick}>
            {edit ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
