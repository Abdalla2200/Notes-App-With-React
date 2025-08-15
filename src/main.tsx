import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.tsx";
import "./index.css";
import App from "./App.tsx";
import Form from "./components/Form.tsx";

import NotesProvider from "./context/NotesProvider.tsx";
import NotesList from "./components/NotesList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/notes", element: <NotesList /> },
      { path: "/form", element: <Form /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  </StrictMode>
);
