import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DoneContext } from "../Todos/Todos";

const Todo = (props) => {
  const { id, title, completed } = props.todo;
  const status = useContext(DoneContext);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/todo/${id}`);
  };
  return (
    <Col>
      <Card className="h-100">
        <Card.Header as="h2">{id}</Card.Header>
        <Card.Body>
          <Card.Title>Title : {title}</Card.Title>
          <Card.Text className="bg-success w-40 text-white">
            Status:{completed === true ? "True" : "False"}
          </Card.Text>

          <Button onClick={handleClick}>Details</Button>
          <br />
          <small>{status}</small>
        </Card.Body>
      </Card>
      <br />
    </Col>
  );
};

export default Todo;
