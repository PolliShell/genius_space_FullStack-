// App.jsx
import React, { useState } from 'react';
import { ToDoBoard } from "./components/ToDoBoard/ToDoBoard";
import { NavBar } from "./components/NavBar/NavBar";
import data from "./data.json";


function App() {
    const [todos, setTodos] = useState(data);

    return (
        <div className="App">
            <NavBar data={todos} setTodos={setTodos} />
            <ToDoBoard data={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
