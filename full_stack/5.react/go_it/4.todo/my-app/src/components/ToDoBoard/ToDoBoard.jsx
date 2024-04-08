import React, { useState } from 'react';
import {Container, Title, Description, DueDate, Priority, Completed, CardGrid} from "./ToDoBoard.styled";
import {deleteTodo} from "../ToDoAction/deleteTodo";
// import { deleteTodo } from "../ToDoAction"; // Importing deleteTodo from ToDoAction

export const ToDoBoard = ({ data }) => {
    const [todos, setTodos] = useState(data);

    return (
        <CardGrid>
            {todos.map(todo =>
            <Container key={todo.id}>
                <Title>{todo.title}</Title>
                <Description>{todo.description}</Description>
                <DueDate>{todo.dueDate}</DueDate>
                <Priority priorityLevel={todo.priority}>{todo.priority}</Priority>
                <Completed color={todo.completed}>{todo.completed.toString()}</Completed>

                {/* Call deleteTodo from ToDoAction */}
                <button onClick={() => deleteTodo(todos, todo.id, setTodos)}>Delete todo</button>
            </Container>
        )}
            </CardGrid>
    );
};
