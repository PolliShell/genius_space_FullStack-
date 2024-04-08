import React, { useState } from 'react';

import data from "../../data.json";

export const deleteTodo = (todos, id, setTodos) => {
    setTodos(todos.filter(todo => todo.id !== id));
};

// export { deleteTodo };