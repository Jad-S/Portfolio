// routes.ts
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { ProjectDetails } from "./components/ProjectDetail"; // 🆕 toevoegen

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "project/:id", Component: ProjectDetails }, // 🆕 toevoegen
      { path: "*", Component: NotFound },
    ],
  },
]);