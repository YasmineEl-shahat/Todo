import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContext } from "../../../App";
import "./Edit.scss";

const Edit = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useContext(TodoContext);
  const navigate = useNavigate();

  // find todo item with id

  useEffect(() => {
    let todoRes = todos.find((todo) => todo.id == id);
    setTodo(todoRes);
    setContent(todoRes?.content);

    // eslint-disable-next-line
  }, []);

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

    const updatedTodo = {
      ...todo,
      content,
    };

    const updatedTodos = todos.map((_todo) =>
      _todo.id == id ? updatedTodo : _todo
    );

    setTodos(updatedTodos);
    navigate("/");
  };

  // handle text area change
  const handleTextareaChange = (e) => {
    setContent(e.target.value);
    setError("");
  };

  return (
    <div className="edit-container mainContainer">
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter todo content"
          value={content}
          onChange={handleTextareaChange}
          required
          minLength={5}
          maxLength={100}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Edit;
