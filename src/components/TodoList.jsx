import React from "react";
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
