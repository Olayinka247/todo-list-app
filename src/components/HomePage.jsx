import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MySideBar from "./MySideBar";
import TodoList from "./TodoList";
import { useState } from "react";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

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
            />
          </Col>
          <Col md={5}>
            <TodoList todos={todos} setTodos={setTodos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
