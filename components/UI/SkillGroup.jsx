export default function SkillGroup({ title, skills }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold tracking-widest text-gray-800">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3 py-1.5
              text-sm
              rounded-lg
              border
              bg-white
              text-gray-700
              shadow-sm
              select-none

              transition-all duration-200 ease-out
              hover:-translate-y-0.5
              hover:shadow-md
              hover:text-gray-900
            "
            style={{
              borderColor: "var(--color-gray-lighter, #cecece)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
