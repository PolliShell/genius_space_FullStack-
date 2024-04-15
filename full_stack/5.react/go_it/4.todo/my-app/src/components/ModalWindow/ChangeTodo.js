import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { updateTodo } from "../ToDoAction/updateTodo"; // Предположим, что у вас есть функция updateTodo для обновления todo

function ChangeTodo({ todos, setTodos, selectedTodo }) {
    const [show, setShow] = useState(false);
    const [newTodo, setNewTodo] = useState(selectedTodo);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTodo({
            ...newTodo,
            [name]: value
        });
    };

    const handleSave = () => {
        updateTodo(todos, setTodos, newTodo); // Используем функцию для обновления todo
        setShow(false);
    };

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        const newTodoData = {
                            title: e.target.title.value,
                            description: e.target.description.value,
                            dueDate: e.target.dueDate.value,
                            priority: e.target.priority.value,
                            completed: e.target.completed.checked
                        };
                        updateTodo(todos, setTodos, newTodoData);
                        handleClose();
                    }}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                name="title"
                                value={newTodo.title}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter description"
                                name="description"
                                value={newTodo.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="dueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="dueDate"
                                value={newTodo.dueDate}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="priority">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control
                                as="select"
                                name="priority"
                                value={newTodo.priority}
                                onChange={handleChange}
                            >
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="completed">
                            <Form.Check
                                type="checkbox"
                                label="Completed"
                                name="completed"
                                checked={newTodo.completed}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChangeTodo;
