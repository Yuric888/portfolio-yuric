import Home from "../Pages/Home/Home";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../Component/Error Page/ErrorPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <div>hello Yuric from about</div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
