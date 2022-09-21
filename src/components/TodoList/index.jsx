import Todoitem from "./Todoitem";
import styles from "./styles.module.css"

function TodoList({todos, setTodos }) {
  function removeTodo(indexToRemove) {
    const newTodos = todos.filter(function (item, index) {
      return indexToRemove !== index;
    });

    setTodos(newTodos);
  }

  function changeTodoItsDone(indexToChange) {
    const newTodos = todos;
    newTodos[indexToChange].itsDone = !newTodos[indexToChange].itsDone;

    setTodos([...newTodos]);
  }

  return (
    <ul className={styles.container}>
      {todos.map(function (todo, index) {
        return (
          <Todoitem
            key={todo.value}
            todo={todo}
            onDoneClick={function () {
              changeTodoItsDone(index);
            }}
            onRemoveClick={function () {
              removeTodo(index);
            }}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
