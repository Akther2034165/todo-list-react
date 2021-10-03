import React, { createContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Todo from "../Todo/Todo";
export const DoneContext = createContext("do it");
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const status = "done it first";
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <DoneContext.Provider value={status}>
      <div>
        <Container className="my-5">
          <Row xs={1} md={2} lg={3} className="g-4 ps-auto">
            {todos.map((todo) => (
              <Todo todo={todo}></Todo>
            ))}
          </Row>
        </Container>
      </div>
    </DoneContext.Provider>
  );
};

export default Todos;
