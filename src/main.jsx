import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Skills from "./routes/Skills.jsx"
import Projects from "./routes/Projects.jsx"
import Contact from "./routes/Contact.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout
    children: [
      { index: true, element: <Home /> },      // "/"
      { path: "home", element: <Home /> },     // "/home"
      { path: "about", element: <About /> },   // "/about"
      { path: "skills", element: <Skills /> }, // "/skills"
      { path: "projects", element: <Projects /> }, // "/projects"
      { path: "contact", element: <Contact /> },   // "/contact"
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
