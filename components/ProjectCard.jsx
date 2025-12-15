export default function ProjectCard({
  title,
  desc,
  tech = [],
  github,
  live, // live project / demo / internal view
}) {
  const primary = "#f59300";      // Only used for the primary CTA
  const grayDefault = "#424242"; // Main text color
  const grayLight = "#a4a4a4";   // Secondary text/border color
  const grayLighter = "#cecece"; // Subtle border/divider
  const grayLightest = "#f5f5f5"; // Background for tech badges

  return (
    <div
      className="
        relative flex flex-col justify-between h-full
        rounded-xl border p-6
        transition-all duration-300
        hover:border-transparent hover:shadow-lg
      "
      style={{
        borderColor: grayLighter,
        backgroundColor: "white",
        // Subtle focus box-shadow on hover, using the primary color
        "&:hover": {
          boxShadow: `0 8px 15px -3px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05), 0 0 0 2px ${primary}30`, // Note: 30 is for 18% opacity
        }
      }}
    >
      {/* Content Area */}
      <div>
        <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: grayDefault }}>
          {title}
        </h3>

        <p className="text-sm leading-snug mb-4" style={{ color: grayLight }}>
          {desc}
        </p>

        {/* Tech stack badges */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1 pb-4 border-b border-dashed" style={{ borderColor: grayLighter }}>
            {tech.map((t) => (
              <span
                key={t}
                className="
                  text-xs font-medium px-2 py-0.5 rounded
                  select-none
                "
                style={{
                  backgroundColor: grayLightest,
                  color: grayDefault,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="mt-auto flex items-center justify-between pt-4">
        {/* GitHub link (Muted and professional) */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1
              text-sm font-medium transition
              hover:opacity-80
            "
            style={{ color: grayDefault }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              {/* GitHub SVG Path (Black/Dark Gray) */}
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.819-.258.819-.57 0-.281-.01-1.033-.015-2.025-3.351.72-4.062-1.61-4.062-1.61-.548-1.389-1.336-1.758-1.336-1.758-1.09-.745.083-.73.083-.73 1.204.084 1.838 1.237 1.838 1.237 1.07 1.832 2.809 1.303 3.492 1.002.107-.777.417-1.303.76-1.602-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.383 1.233-3.22-.124-.304-.535-1.524.118-3.174 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.65.242 2.87.118 3.174.767.837 1.233 1.91 1.233 3.22 0 4.608-2.805 5.623-5.478 5.922.428.368.815 1.107.815 2.228 0 1.609-.015 2.899-.015 3.299 0 .315.215.694.824.57 4.774-1.586 8.202-6.075 8.202-11.387C24 5.373 18.627 0 12 0z"/>
            </svg>
            <span>Repository</span>
          </a>
        )}

        {/* View Project / Live Demo (The ONLY accent color use) */}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-4 py-1.5 rounded-lg
              text-sm font-semibold transition-all duration-200
              shadow-sm hover:shadow-lg hover:-translate-y-px
            "
            style={{
              backgroundColor: primary,
              color: 'white',
            }}
          >
            <span className="text-base">View Project</span>
            <span className="text-xl">
              &rarr;
            </span>
          </a>
        )}
      </div>
    </div>
  );
}