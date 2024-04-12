// ToDoBoard.jsx
import React from 'react';
import { Container, Title, Description, DueDate, Priority, Completed, CardGrid } from "./ToDoBoard.styled";
import {deleteTodo} from "../ToDoAction/deleteTodo";
import ModalWindow from "../utils/ModalWindow";

export const ToDoBoard = ({ data, setTodos }) => {
    return (
        <CardGrid>
            <ModalWindow todos={data} setTodos={setTodos}/>
            {data.map(todo =>
                <Container key={todo.id}>
                    <Title>{todo.title}</Title>
                    <Description>{todo.description}</Description>
                    <DueDate>{todo.dueDate}</DueDate>
                    <Priority priorityLevel={todo.priority}>{todo.priority}</Priority>
                    <Completed color={todo.completed}>{todo.completed.toString()}</Completed>
                    <button onClick={() => deleteTodo(data, todo.id, setTodos)}>Delete todo</button>
                </Container>
            )}
        </CardGrid>
    );
};
