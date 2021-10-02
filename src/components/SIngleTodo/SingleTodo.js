import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleTodo = () => {
  let { id } = useParams();
  console.log(id);
  const [singleTodoUpdate, setSingleTodoUpdate] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleTodoUpdate(data.employee));
  }, []);
  return (
    <div>
      <h1>{singleTodoUpdate?.title}</h1>
    </div>
  );
};

export default SingleTodo;
