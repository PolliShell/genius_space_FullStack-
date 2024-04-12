import React, { useState } from 'react';

import { addTodo } from "../ToDoAction/addTodo";
import {Button, Form, Modal} from "react-bootstrap";

function ModalWindow({ todos, setTodos }) {
    const [show, setShow] = useState(false);
    const [newTodo, setNewTodo] = useState({
        id: todos.length + 1,
        title: '',
        description: '',
        dueDate: '',
        priority: '',
        completed: false
    });

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
        addTodo(todos, setTodos, newTodo);
        setShow(false);
        setNewTodo({
            id: todos.length + 1,
            title: '',
            description: '',
            dueDate: '',
            priority: '',
            completed: false
        });

    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="dueDate"
                                value={newTodo.dueDate}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;
