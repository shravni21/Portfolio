export default function AboutApp() {
  return (
    <div className="max-w-4xl space-y-10">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Profile Image */}
        <div className="shrink-0">
          <img
            src="/icon/prof_img_1.jpg"
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
          <h1 className="text-3xl md:text-4xl font-semibold text-orange-500">
            Shravni Wakade
          </h1>

          <p className="mt-1 text-lg text-gray-600">
            Full-Stack Java Developer
          </p>

          <p className="mt-1 text-sm text-gray-500">
            India · Web Development · Software Engineering
          </p>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shravni-wakde-127bb9216/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 mt-2
              text-sm font-medium text-blue-600
              hover:text-blue-700 transition
            "
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
          I’m a full-stack developer who enjoys building clean, reliable,
          and user-focused web applications. I like working across frontend
          and backend, where I can combine logic with thoughtful UI design.
        </p>

        <p className="text-base leading-relaxed text-gray-700">
          I work primarily with{" "}
          <span className="font-medium">Java, Spring Boot, and React.js</span>,
          and have a basic understanding of{" "}
          <span className="font-medium">Machine Learning and AI concepts</span>.
          I enjoy learning new technologies and exploring ideas that can grow
          into meaningful products.
        </p>
      </div>
    </div>
  );
}
