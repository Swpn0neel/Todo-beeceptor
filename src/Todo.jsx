import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Todo = () => {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    fetch(`https://my-todo.free.beeceptor.com/todos/${id}`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error(response.status);
      })
      .then((todo_data) => {
        setTodoDetails((_) => todo_data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1> {`Todo id: ${todoId}`} </h1>
          <h1> {`Todo userId: ${userId}`} </h1>
          <h1> {`Todo title: ${title}`} </h1>
          <h1> {`Todo completed: ${completed}`} </h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
