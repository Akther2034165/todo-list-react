import React, { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

const Chart = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("./todos.json")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  const data = todo;
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />

      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="userId" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
