// ToDoBoard.jsx
import React, {useState} from 'react';
import { Container, Title, Description, DueDate, Priority, Completed, CardGrid } from "./ToDoBoard.styled";
import { deleteTodo } from "../ToDoAction/deleteTodo";

export const ToDoBoard = ({ data }) => {
    const [todos, setTodos] = useState(data);
    return (
        <CardGrid>
            {data.map(todo =>
                <Container key={todo.id}>
                    <Title>{todo.title}</Title>
                    <Description>{todo.description}</Description>
                    <DueDate>{todo.dueDate}</DueDate>
                    <Priority priorityLevel={todo.priority}>{todo.priority}</Priority>
                    <Completed color={todo.completed}>{todo.completed.toString()}</Completed>
                    <button onClick={() => deleteTodo(todos, todo.id,setTodos)}>Delete todo</button>
                </Container>
            )}
        </CardGrid>
    );
};
