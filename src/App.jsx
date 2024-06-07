import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as todosLoader } from "./pages/Todos";
import Todos from "./assets/component/Todos";

// create a router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
    // link the loader function to the route
    loader: todosLoader
  }
]);


const App = () => {
  return <RouterProvider router={router} />;
}

export default App;