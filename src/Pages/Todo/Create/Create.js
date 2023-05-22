import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../../App";
import "./Create.scss";

const Create = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [todos, setTodos] = useContext(TodoContext);
  const navigate = useNavigate();

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) {
      setError("Todo content is required");
      return;
    }

    if (content.length < 5) {
      setError("Todo content must be at least 5 characters");
      return;
    }

    if (content.length > 100) {
      setError("Todo content must be at most 100 characters");
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      content,
      date: new Date().toLocaleDateString(),
    };
    setTodos([...todos, newTodo]);
    navigate("/");
  };

  // handle text area change
  const handleTextareaChange = (e) => {
    setContent(e.target.value);
    setError("");
  };

  return (
    <div className="create-container mainContainer">
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter todo content"
          value={content}
          onChange={handleTextareaChange}
          required
          minLength={5}
          maxLength={100}
        />
        {error && <div className="error paragraph">!{error}</div>}
        <button type="submit" disabled={!content}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
