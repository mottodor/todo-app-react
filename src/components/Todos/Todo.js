import { RiTodoFill, RiDeleteBin2Fill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa6';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, compliteToggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isComplited ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Fill
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => compliteToggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
