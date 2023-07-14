import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    if (text) {
      const newTodo = {
        text,
        isComplited: false,
        id: uuidv4(),
      };
      setTodos([...todos, newTodo]);
    }
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => id !== todo.id));
  }

  function compliteToggleTodoHandler(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      )
    );
  }

  function deleteComplitedHandler() {
    setTodos(todos.filter((todo) => !todo.isComplited));
  }

  const completedTodosCount = todos.filter((todo) => todo.isComplited).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {!!todos.length && (
        <TodosActions
          deleteComplitedTodos={deleteComplitedHandler}
          resetTodos={() => setTodos([])}
          completedTodosCount={completedTodosCount}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        compliteToggleTodo={compliteToggleTodoHandler}
      />

      {!!completedTodosCount && (
        <h2>{`You have completed ${completedTodosCount}   ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
