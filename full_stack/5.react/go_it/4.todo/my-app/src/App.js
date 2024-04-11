// App.jsx
import React, { useState } from 'react';
import { ToDoBoard } from "./components/ToDoBoard/ToDoBoard";
import data from "./data.json";
import { ToDoForm } from "./components/ToDoForm/ToDoForm";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
    const [todos, setTodos] = useState(data);

    const updateTodos = (newTodos) => {
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <NavBar updateTodos={updateTodos} />
            <ToDoBoard data={todos} />
        </div>
    );
}

export default App;
