import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Create from "./Pages/Todo/Create/Create";
import Edit from "./Pages/Todo/Edit/Edit";
import TodoDetails from "./Pages/Todo/TodoDetails/TodoDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/todo/:id",
    element: <TodoDetails />,
  },
]);

export default Routes;
