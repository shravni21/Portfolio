export default function AboutApp() {
  return (
    <div className="max-w-4xl space-y-10">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Profile Image */}
        <div className="shrink-0">
          <img
            src="/icon/prof_img.png"
            alt="Shravni Wakade"
            className="
              w-28 h-28
              rounded-full
              object-cover
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
            "
          />
        </div>

        {/* Name & Title */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold " style={{ color: "var(--color-primary, #f59300)" }}>
            Shravni Wakade
          </h1>

          <p className="mt-1 text-lg text-gray-600">
            Full-Stack Java Developer
          </p>

          <p className="mt-1 text-sm text-gray-500">
            India · Software Development · Engineering
          </p>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shravni-wakde-127bb9216/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-sm font-medium transition"
            style={{ color: "#0A66C2" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.2h4.6V24H.2V8.2zM8.3 8.2h4.4v2.2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.8V24h-4.6v-7.9c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V24H8.3V8.2z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* About Text */}
      <div className="space-y-4 max-w-2xl">
        <p className="text-base leading-relaxed text-gray-700">
          Software Developer with{" "}
          <span className="font-medium">
            1.5 years of professional experience
          </span>{" "}
          working on real-world software development projects. I have contributed
          to building, enhancing, and maintaining applications in production
          environments, focusing on code quality, reliability, and performance.
        </p>

        <p className="text-base leading-relaxed text-gray-700">
          My primary expertise lies in{" "}
          <span className="font-medium">Java, Spring Boot, and React.js</span>,
          where I work across backend services, REST APIs, and frontend
          integration. I also have a foundational understanding of{" "}
          <span className="font-medium">Machine Learning and AI concepts</span>,
          and I continuously work on strengthening my software engineering
          fundamentals through hands-on learning and practice.
        </p>
      </div>
    </div>
  );
}
