import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    // TODO: REPLACE WITH LIVE URL
    fetch(`https://my-todo.proxy.beeceptor.com/todo/${id}`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error(response.status);
      })
      .then((todo_data) => {
        // TODO: REMOVE THIS LOG
        console.log(todo_data);
        setTodos((_) => todo_data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  console.log(todos);
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
