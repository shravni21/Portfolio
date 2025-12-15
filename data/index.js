import AboutApp from "../components/AboutApp";
import ProjectsApp from "../components/ProjectsApp";
import ResumeApp from "../components/ResumeApp";
import SkillsApp from "../components/SkillsApp";
import CodingProfilesApp from "../components/CodingProfilesApp";

export const appsList = [
  {
    id: "about",
    title: "about",
    icon: "/icon/icon_about.webp",
    content: <AboutApp />,
  },
  {
    id: "projects",
    title: "projects",
    icon: "/icon/icon_work.webp",
    content: <ProjectsApp />,
  },
  {
    id: "professional",
    title: "professional",
    icon: "/icon/icon_path.png",
    content: <ResumeApp />,
  },
  {
    id: "Skills",
    title: "Skills",
    icon: "/icon/icon_faq.webp",
    content: <SkillsApp/>
  },
  {
    id: "links",
    title: "coding profiles",
    icon: "/icon/icon_links.webp",
    content: <CodingProfilesApp />,
  },

];
