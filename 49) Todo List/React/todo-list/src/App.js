import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const formRef = useRef();

  const updateLS = useCallback((newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }, []);

  const addTodo = useCallback(
    (todo) => {
      let todoText = formRef.current.value;

      if (todo) {
        todoText = todo.text;
      }

      if (todoText) {
        const newTodo = {
          text: todoText,
          completed: false,
        };

        if (todo && todo.completed) {
          newTodo.completed = true;
        }

        const newTodos = [...todos];
        newTodos.push(newTodo);
        setTodos(newTodos);

        formRef.current.value = "";
        updateLS(newTodos);
      }
    },
    [todos, updateLS]
  );

  useEffect(() => {
    const localStoreTodos = JSON.parse(localStorage.getItem("todos"));
    const fetchedTodos = [];
    if (localStoreTodos) {
      localStoreTodos.forEach((todo) => fetchedTodos.push(todo));
      setTodos(fetchedTodos);
    }
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    addTodo();
  };

  const toggleCompleteTodoHandler = (event) => {
    const newTodos = [...todos];
    newTodos[event.target.id].completed = !newTodos[event.target.id].completed;

    setTodos(newTodos);
    updateLS(newTodos);
  };

  const deleteTodoHandler = (event) => {
    event.preventDefault();
    let newTodos = [...todos];
    newTodos.splice(event.target.id, 1);

    setTodos(newTodos);
    updateLS(newTodos);
  };

  return (
    <React.Fragment>
      <h1>todos</h1>
      <form id="form" onSubmit={submitHandler}>
        <input
          type="text"
          className="input"
          id="input"
          placeholder="Enter your todo"
          autoComplete="off"
          ref={formRef}
        />
        <ul className="todos" id="todos">
          {todos.map((todo, idx) => {
            return (
              <li
                key={idx}
                id={idx}
                className={todo.completed ? "completed" : ""}
                onClick={toggleCompleteTodoHandler}
                onContextMenu={deleteTodoHandler}
              >
                {todo.text}
              </li>
            );
          })}
        </ul>
      </form>

      <small>
        Left click to toggle completed. <br />
        Right click to delete todo
      </small>
    </React.Fragment>
  );
}

export default App;
