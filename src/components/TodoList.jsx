import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  //todos.sort((a, b) => Number(a.done) - Number(b.done));//changes the original

  const sortedTodos = todos.sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
