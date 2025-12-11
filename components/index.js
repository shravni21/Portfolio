import AboutApp from "./AboutApp";
import ProjectsApp from "./ProjectsApp";
import ResumeApp from "./ResumeApp";
import ContactApp from "./ContactApp";

export const appsList = [
  {
    id: "about",
    title: "About",
    icon: "👩‍💻",
    content: <AboutApp />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: "🗂️",
    content: <ProjectsApp />,
  },
  {
    id: "resume",
    title: "Resume",
    icon: "📄",
    content: <ResumeApp />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: "✉️",
    content: <ContactApp />,
  },
];
