import React from "react";
import { Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png"
          width="50"
          height="35"
        />
        TO-DO LIST APP
      </Navbar.Brand>
    </Navbar>
  );
};

export default MyNavbar;
