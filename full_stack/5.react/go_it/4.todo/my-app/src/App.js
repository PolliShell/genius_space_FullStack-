// App.jsx
import React from 'react';
import { ToDoBoard } from "./components/ToDoBoard/ToDoBoard";
import data from "./data.json"

function App() {
    return (
        <div className="App">
            <h1>hi</h1>
            <ToDoBoard data={data} />
        </div>
    );
}

export default App;
