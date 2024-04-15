export const changeTodo = (todos, id, setTodos, newTodoData) => {
    const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, ...newTodoData } : todo
    );
    setTodos(updatedTodos);
};
