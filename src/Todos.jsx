import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch(`https://my-todo.free.beeceptor.com/todos`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error(response.status);
      })
      .then((todo_data) => {
        // TODO: REMOVE THIS LOG
        setTodos((_) => todo_data.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 10).map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
