// routes.ts
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { NotFound } from "./components/NotFound";
import { ProjectDetails } from "./components/ProjectDetail"; // 🆕 toevoegen
import { BlogDetail } from "./components/BlogDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
            { path: "blog", Component: Blog },

      { path: "project/:id", Component: ProjectDetails }, // 🆕 toevoegen
      { path: "blog/:id", Component: BlogDetail }, // ✅ Geen leading slash!

      { path: "*", Component: NotFound },
    ],
  },
]);