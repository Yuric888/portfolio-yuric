import Home from "../Pages/Home/Home";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../Component/Error Page/ErrorPage";
import ThemeContext, { themes } from "../util/themContext";
import { useReducer } from "react";
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "light":
      return themes.light;
    case "dark":
      return themes.dark;
    default:
      throw new Error();
  }
};
function init() {
  return themes.light;
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {}, init);
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
    <ThemeContext.Provider value={{ state, dispatch }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
