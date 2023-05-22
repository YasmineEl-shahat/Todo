import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import { createContext, useState } from "react";

export const TodoContext = createContext([]);
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoContext.Provider value={[todos, setTodos]}>
        <RouterProvider router={Routes} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
