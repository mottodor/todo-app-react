import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  return (
    <form
      className={styles.todoForm}
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
      }}
    >
      <input
        className={styles.todoInput}
        placeholder="Input next todo"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button className={styles.todoBtn} type="Submit" title="Submit">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
