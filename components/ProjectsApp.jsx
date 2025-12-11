import ProjectCard from "./ProjectCard";

export default function ProjectsApp() {
  return (
    <div className="space-y-3">
      <ProjectCard title="RAG Knowledge Hub" desc="Java + FastAPI RAG" />
      <ProjectCard title="Panipuri Puzzle UI" desc="Interactive UI" />
      <ProjectCard title="Arduino Mini-Project" desc="Hardware + dashboard" />
    </div>
  );
}
