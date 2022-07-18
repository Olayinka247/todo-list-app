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
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterTodos();
    saveTodos();
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

  const saveTodos = () => {
    // saving and todo to local storage and pushing to the state
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodos = () => {
    // run a check to see if there is anything in local storage
    if (localStorage.getItem("todos") === null) {
      // setting it to an empty array
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      // if we do have something get what we have and push it to the state
      let localSavedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localSavedTodos);
    }
  };

  return (
    <div>
      <Container>
        <header className="text-white">
          <h1 className="text-center mb-3">TO-DO List</h1>
        </header>
        <Row>
          <Col md={6}>
            <MySideBar
              setInput={setInput}
              input={input}
              todos={todos}
              setTodos={setTodos}
              setTodoStatus={setTodoStatus}
            />
          </Col>
          <div
            style={{ borderRight: "3px solid #c4c4c4", height: "100vh" }}
          ></div>
          <Col md={4}>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              todoFilter={todoFilter}
            />
          </Col>
        </Row>
      </Container>
      {/* // create a footer */}
      <footer className="text-white text-center">
        <p> Copyright Boldcodes &copy; {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default HomePage;
