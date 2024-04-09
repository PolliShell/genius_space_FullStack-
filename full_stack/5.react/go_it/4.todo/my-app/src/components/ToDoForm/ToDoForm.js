// ToDoForm.js
import React, { useState } from 'react';

export const ToDoForm = ({ onAddTodo }) => {
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: '',
        completed: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            ...inputs,
            id: Date.now()
        };
        onAddTodo(newTodo);
        setInputs({
            title: '',
            description: '',
            dueDate: '',
            priority: '',
            completed: ''
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Enter title</label>
                <input type="text" name="title" value={inputs.title} onChange={handleChange} />

                <label htmlFor="description">Enter description</label>
                <input type="text" name="description" value={inputs.description} onChange={handleChange} />

                <label htmlFor="dueDate">Enter dueDate</label>
                <input type="text" name="dueDate" value={inputs.dueDate} onChange={handleChange} />

                <label htmlFor="priority">Enter priority</label>
                <input type="text" name="priority" value={inputs.priority} onChange={handleChange} />

                <label htmlFor="completed">Enter completed</label>
                <input type="text" name="completed" value={inputs.completed} onChange={handleChange} />

                <button type="submit">submit</button>
            </form>
        </div>
    );
};
