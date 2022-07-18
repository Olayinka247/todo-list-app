import React from "react";
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, todoFilter }) => {
  return (
    <ListGroup>
      {todoFilter.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
