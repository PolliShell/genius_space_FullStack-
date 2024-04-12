import React, { useState } from 'react';

import data from "../../data.json";

export const deleteTodo = (todos, id, setTodos) => {
    console.log("delete")
    setTodos(todos.filter(todo => todo.id !== id));
    console.log("delete")
};

// export { deleteTodo };