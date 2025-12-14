import React from "react";

const HeroText = () => {
  return (

    <div className="mb-8 md:mb-12 text-center max-md:mt-12">
      <h1
        className="
    text-4xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    mb-6 md:mb-8
  "
      >
        <span style={{ color: "var(--color-gray, #424242)" }}>hi! </span>
        <span style={{ color: "var(--color-primary, #f59300)" }}>
          i&apos;m shravni
        </span>
      </h1>

      <p
        className="
          text-xl
          sm:text-xl
          md:text-xl
          tracking-wide
        "
        style={{ color: "var(--color-gray-light, #424242)" }}
      >
        Software Developer,Java, React.js
      </p>
    </div>
  );
};

export default HeroText;
