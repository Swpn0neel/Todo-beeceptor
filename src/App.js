import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}
