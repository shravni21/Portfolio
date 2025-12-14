import AboutApp from "../components/AboutApp";
import ProjectsApp from "../components/ProjectsApp";
import ResumeApp from "../components/ResumeApp";
import ContactApp from "../components/ContactApp";

export const appsList = [
  {
    id: "about",
    title: "about",
    icon: "/icon/icon_about.webp",
    content: <AboutApp />,
  },
  {
    id: "work",
    title: "work",
    icon: "/icon/icon_work.webp",
    content: <ProjectsApp />,
  },
  {
    id: "professional",
    title: "professional",
    icon: "/icon/icon_prof.png",
    content: <ResumeApp />,
  },
  {
    id: "contact",
    title: "contact",
    icon: "/icon/icon_contact.webp",
    content: <ContactApp />,
  },
  {
    id: "links",
    title: "links",
    icon: "/icon/icon_links.webp",
    content: <ContactApp />,
  },
];
