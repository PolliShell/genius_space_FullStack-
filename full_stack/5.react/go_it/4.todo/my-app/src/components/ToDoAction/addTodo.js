export const addTodo = (todos, id, setTodos) => {
    setTodos(todos.filter(todo => todo.id !== id));
};