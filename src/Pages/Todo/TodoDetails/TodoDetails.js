import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { TodoContext } from "../../../App";
import "./details.scss";

function TodoDetails() {
  const { id } = useParams();
  const [todos, setTodos] = useContext(TodoContext);
  const [todo, setTodo] = useState(todos.find((todo) => todo.id == id));
  const navigate = useNavigate();

  // handle delete button click
  const handleDeleteClick = () => {
    const updatedTodos = todos.filter((t) => t.id != id);
    setTodos(updatedTodos);
    navigate(-1);
  };

  return (
    <div className="details-container">
      <h1>Todo Details</h1>
      <div className="details-content">
        <p>{todo?.content}</p>
        <div className="details-buttons">
          <Link to={`/edit/${id}`}>
            <button className="m-4">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </Link>
          <button className="m-4" onClick={handleDeleteClick}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;
