import Todo from './Todo';

function TodoList({ todos, deleteTodo, compliteToggleTodo }) {
  return !todos.length ? (
    <h2>No todos yet</h2>
  ) : (
    todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        compliteToggleTodo={compliteToggleTodo}
      />
    ))
  );
}

export default TodoList;
