import { Link } from "react-router-dom";
import { TodoContext } from "../../App";
import { useContext, useState } from "react";
import "./home.scss";

const Home = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [selectedTodos, setSelectedTodos] = useState([]);

  // sort todos in descending order based on date
  let sortedTodos = todos.sort((a, b) => new Date(b.date) - new Date(a.date));
  sortedTodos = sortedTodos.sort((a, b) => b.id - a.id);

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedTodos([...selectedTodos, id]);
    } else {
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
    }
  };

  const handleDeleteSelected = () => {
    const updatedTodos = todos.filter(
      (todo) => !selectedTodos.includes(todo.id)
    );
    setTodos(updatedTodos);
    setSelectedTodos([]);
  };
  return (
    <div className="home-container">
      <Link to="/create" className="create-todo-button">
        Create New Todo
      </Link>
      <div className="todo-list mainContainer">
        {sortedTodos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, todo.id)}
              checked={selectedTodos.includes(todo.id)}
            />
            <Link to={`/todo/${todo.id}`}>
              <div className="todo-content">{todo.content}</div>
            </Link>
            <div className="todo-date">{todo.date}</div>

            <div className="todo-actions">
              <Link to={`/edit/${todo.id}`}>
                <button className="m-4">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </Link>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="delete-selected">
        {selectedTodos.length > 0 && (
          <button onClick={handleDeleteSelected}>Delete Selected</button>
        )}
      </div>
    </div>
  );
};

export default Home;
