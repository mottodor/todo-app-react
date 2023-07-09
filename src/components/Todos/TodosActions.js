import { FaRepeat } from 'react-icons/fa6';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({
  deleteComplitedTodos,
  resetTodos,
  completedTodosCount,
}) {
  return (
    <div className={styles.actions}>
      <Button onClick={resetTodos} title="Reset all todos">
        <FaRepeat />
      </Button>
      <Button
        onClick={deleteComplitedTodos}
        title="Delete complited todos"
        disabled={!completedTodosCount}
      >
        <RiDeleteBin2Fill />
      </Button>
    </div>
  );
}

export default TodosActions;
