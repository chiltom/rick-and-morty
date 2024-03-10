import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* 
    pass router component to RouterProvider to specify the routing path 
    instead of rendering just App.jsx
  */
  <RouterProvider router={router} />
);
