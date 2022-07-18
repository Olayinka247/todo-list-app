import React from "react";
import { MdAdd } from "react-icons/md";
import { Container, Row, Col, Button } from "react-bootstrap";

const MySideBar = ({ setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="d-flex ">
            <input
              onChange={inputHandler}
              type="text"
              className="form-control"
            />
            <Button variant="dark">
              <MdAdd size={20} />
            </Button>
          </div>
        </Col>

        <Col md={3}>
          <div>
            <select className="form-control">
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
