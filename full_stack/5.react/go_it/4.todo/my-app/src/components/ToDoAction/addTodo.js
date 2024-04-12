
export const addTodo = (todos, setTodos, newTodo) => {
    console.log("add")
    setTodos([...todos, newTodo]);
    console.log("add")
};
