// App.jsx
import React from 'react';
import { ToDoBoard } from "./components/ToDoBoard/ToDoBoard";
import data from "./data.json"
import {ToDoForm} from "./components/ToDoForm/ToDoForm";

function App() {
    return (
        <div className="App">
            <h1>hi</h1>
            <ToDoBoard data={data} />
        </div>
    );
}

export default App;
