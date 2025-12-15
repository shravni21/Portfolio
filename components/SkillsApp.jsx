import SkillGroup from './UI/SkillGroup'

export default function SkillsApp() {
  return (
    <div className="space-y-8">
      <SkillGroup
        title="FRONTEND"
        skills={[
          "React.js",
          "JavaScript",
          "HTML/CSS",
          "Tailwind CSS",
        ]}
      />

      <SkillGroup
        title="BACKEND"
        skills={[
          "Java",
          "Spring Boot",
          "Python",
          "Node.js",
          "REST APIs",
        ]}
      />

      <SkillGroup
        title="LANGUAGES"
        skills={[
          "Java",
          "C++",
          "C",
          "Python",
          "JavaScript",
        ]}
      />

      <SkillGroup
        title="DATABASES"
        skills={[
          "MySQL",
          "PostgreSQL",
          "MongoDB",
        ]}
      />
      <SkillGroup
        title="CLOUD & DEVOPS"
        skills={[
          "CI/CD",
          "Docker (Basics)",
          "Kubernetes (Basics)",
          "AWS (Basics)",
          "GCP (Basics)",
          "Netlify",
          "Heroku",
        ]}
      />
      <SkillGroup
        title="TOOLS & DEVELOPMENT"
        skills={[
          "Git",
          "GitHub",
          "Postman",
          "Agile / Scrum",
        ]}
      />
    </div>
  );
}
