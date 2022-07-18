import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MySideBar from "./MySideBar";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("All");
  const [todoFilter, setTodoFilter] = useState([]);

  useEffect(() => {
    filterTodos();
    console.log("THIS IS THE FILTERED TODOS: ", filterTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, todoStatus]);

  const filterTodos = () => {
    switch (todoStatus) {
      case "completed":
        setTodoFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setTodoFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setTodoFilter(todos);
        break;
    }
  };

  return (
    <div>
      <Container>
        <header className="text-white">
          <h1>TO-DO List</h1>
        </header>
        <Row>
          <Col md={7}>
            <MySideBar
              setInput={setInput}
              input={input}
              todos={todos}
              setTodos={setTodos}
              setTodoStatus={setTodoStatus}
            />
          </Col>
          <Col md={5}>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              todoFilter={todoFilter}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
