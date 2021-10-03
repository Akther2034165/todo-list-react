import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const TodoDetails = () => {
  const { todoID } = useParams();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <Col>
      <Card className="h-100" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>ID:{todoID}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {todo.title}
          </Card.Subtitle>
          <Card.Text>
            Status:{todo.completed === true ? "True" : "False"}
          </Card.Text>

          <Link to="/home">
            <Button variant="primary">Home</Button>
          </Link>
          <Link to="/todos">
            <Button variant="primary">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TodoDetails;
