// // import css from "..Components/App.css";

import FooterComp from "./Footer";
import Body from "../Components/Body";
import Header from "./Header";
import About from "./About";
import Errors from "./Errors.js";
import ReactDOM from "react-dom/client";
// import Contactus from "./Contactus";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppName = {
  Content: "space-between",
  display: "flex",
  backgroundColor: "pink",
  border: "1px solid red",
  marginleft: "1rem",
};

function App() {
  return (
    <>
      <div style={AppName}>
        <Header />
      </div>
      <Outlet />
      {/* <Outlet /> */}
      <FooterComp />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      //{ path: "/contactus", element: <Contactus />, errorElement: <Errors /> },
      { path: "/about", element: <About />, errorElement: <Errors /> },
    ],
  },
]);
console.log("router", router);

//export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
