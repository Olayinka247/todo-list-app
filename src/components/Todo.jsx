import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { VscCheckAll } from "react-icons/vsc";
import { BiTrash } from "react-icons/bi";

const Todo = ({ todo, setTodos, todos }) => {
  const handleDelete = () => {
    // if the item id is not equals to the todo id then delete the item
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((t) =>
        //   if the todo is completed:false, set it to completed:true
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <>
      <div className="d-flex">
        <ListGroup.Item className={` ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </ListGroup.Item>
        <Button onClick={handleComplete} variant="success">
          <VscCheckAll size={20} />
        </Button>
        <Button onClick={handleDelete} variant="danger">
          <BiTrash size={20} />
        </Button>
      </div>
      <hr />
    </>
  );
};

export default Todo;
