// updateTodo.js
export const updateTodo = (todos, setTodos, updatedTodo) => {
    const updatedTodos = todos.map(todo =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
};
