// ToDoBoard.jsx
import React from 'react';
import {
    Container,
    Title,
    Description,
    DueDate,
    Priority,
    Completed,
    CardGrid,
    ButtonContainer
} from "./ToDoBoard.styled";
import {deleteTodo} from "../ToDoAction/deleteTodo";
import AddTodo from "../ModalWindow/AddTodo";
import {changeTodo} from "../ToDoAction/changeTodo";
import ChangeTodo from "../ModalWindow/ChangeTodo";

export const ToDoBoard = ({ data, setTodos }) => {
    return (
        <CardGrid>
            {/*<AddTodo todos={data} setTodos={setTodos}/>*/}
            {data.map(todo =>
                <Container key={todo.id}>
                    <Title>{todo.title}</Title>
                    <Description>{todo.description}</Description>
                    <DueDate>{todo.dueDate}</DueDate>
                    <Priority priorityLevel={todo.priority}>{todo.priority}</Priority>
                    <Completed color={todo.completed}>{todo.completed.toString()}</Completed>
                    <ButtonContainer>
                        <button onClick={() => deleteTodo(data, todo.id, setTodos)}>Delete todo</button>
                        {/*<button onClick={() => changeTodo(data, todo.id, setTodos)}>Change todo</button>*/}
                        <ChangeTodo todos={data} setTodos={setTodos} selectedTodo={todo} />
                    </ButtonContainer>

                </Container>
            )}
        </CardGrid>
    );
};
