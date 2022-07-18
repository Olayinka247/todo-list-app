import React from "react";
import { MdAdd } from "react-icons/md";
import { Container, Row, Col, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const MySideBar = ({ setInput, setTodos, todos, input, setTodoStatus }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: input, completed: false, id: uuidv4() }]);
    setInput("");
  };

  const handleStatus = (e) => {
    setTodoStatus(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="d-flex ">
            <input
              value={input}
              onChange={inputHandler}
              type="text"
              className="form-control"
            />
            <Button onClick={handleSubmit} variant="dark">
              <MdAdd size={20} />
            </Button>
          </div>
        </Col>

        <Col md={3}>
          <div>
            <select onChange={handleStatus} className="form-control">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MySideBar;
