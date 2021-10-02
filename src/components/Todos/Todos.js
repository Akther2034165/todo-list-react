import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("/todos.json")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h1>Todos are here{todos.length}</h1>
      {todos.map((todo) => (
        <Container>
          <Card>
            <Card.Header>{todo?.title}</Card.Header>
            <Card.Body>
              <Card.Title>{todo?.id}</Card.Title>
              <Card.Text>
                {todo.completed === true ? "True" : "False"}
              </Card.Text>
              <NavLink
                to={`/todos/${todos?.id}`}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  textDecoration: "none",
                }}
              >
                <Button>Details</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </div>
  );
};

export default Todos;
