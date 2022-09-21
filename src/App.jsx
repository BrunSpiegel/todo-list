import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import styles from "./index.module.css";
import "./global.css";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    const todos = localStorage.getItem("todos");

    if (!todos) return;

    setTodos(JSON.parse(todos));
  }, []);

  useEffect(
    function () {
      if (todos.length === 0) return;

      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  function handleAddTodo(text) {
    console.log(text);

    const newTodo = {
      value: text,
      itsDone: false,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className={styles.container}>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
