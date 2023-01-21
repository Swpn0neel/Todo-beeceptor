import React from "react";
import { useNavigate } from "react-router-dom";

const TodoCard = (props) => {
  const { id, completed, title } = props;
  let history = useNavigate();

  const pushRoute = () => {
    history(`/todo/${id}`)
  }

  return (
    <div
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "15px",
        width: "150px",
      }}
      onClick={pushRoute}
    >
      <h4> {title} </h4>
      <h6> {`Completed: ${completed}`} </h6>
    </div>
  );
};

export default TodoCard;
