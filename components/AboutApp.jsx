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
