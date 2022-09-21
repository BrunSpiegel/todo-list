import { useState } from "react";
import { FiPlus } from "react-icons/fi"

import styles from "./styles.module.css";

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    const inputText = e.target.value;

    setText(inputText);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text === "") return;

    onAddTodo(text);
    setText("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" className={styles.input} onChange={handleChange} value={text} />
      <button type="submit" className={styles.button}>
      <FiPlus size={28} color="#ffffff"/>
      </button>
    </form>
  );
}

export default AddTodo;
