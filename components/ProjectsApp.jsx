import ProjectCard from "./ProjectCard";

export default function ProjectsApp() {
  return (
    <div className="space-y-3">
      <ProjectCard
        title="Airbnb Clone"
        desc="Full-stack accommodation booking app with a React + Next.js frontend and a secure Java Spring Boot backend. Features authentication, property listings, booking management, and Stripe payments."
        tech={[
          "Next.js 14",
          "React",
          "Spring Boot",
          "Spring Security",
          "PostgreSQL",
          "Prisma",
          "TailwindCSS",
          "Stripe",
        ]}
        github="https://github.com/shravni21/airbnb"
        // live="https://airbnb-clone-demo.vercel.app"
      />
      <ProjectCard
        title="TriAgentDesk"
        desc="Ticketing app with auth, moderator/admin/user roles and AI summarization of ticket descriptions."
        tech={["React", "Node.js", "MongoDB", "JWT", "OpenAI API"]}
        github="https://github.com/shravni21/TriagentDesk"
        live="https://triagent-desk.vercel.app/"
      />
      <ProjectCard
        title="ReactAnimate3D"
        desc="Lightweight 3D animation library for React enabling interactive,
         using WebGL and Three.js under the hood."
        tech={["React", "Three.js", "GSAP"]}
        github="https://github.com/yourusername/reactanimate3d"
        live="https://apple-iphone-s-website.netlify.app/"
      />
      <ProjectCard
        title="RAG Knowledge Hub"
        desc="Java + FastAPI RAG-powered document knowledge base."
        tech={["Java", "FastAPI", "LangChain"]}
        // github="https://github.com/yourusername/rag-knowledge-hub"
        // live="https://rag-hub-demo.vercel.app"
      />
    </div>

  );
}
