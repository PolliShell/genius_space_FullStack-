import React, { useState } from 'react';
import { formatEventStart } from "../utils/formatEventStart";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ToDoForm = ({ onAddTodo, closeModal }) => {
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
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
            dueDate: formatEventStart(),
            id: Date.now()
        };
        onAddTodo(newTodo);
        closeModal();
        setInputs({
            title: '',
            description: '',
            priority: '',
            completed: ''
        });
    };

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter title</label>
                    <input type="text" className="form-control" name="title" value={inputs.title} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Enter description</label>
                    <input type="text" className="form-control" name="description" value={inputs.description} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Enter priority</label>
                    <input type="text" className="form-control" name="priority" value={inputs.priority} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="completed" className="form-label">Enter completed</label>
                    <input type="text" className="form-control" name="completed" value={inputs.completed} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
