"use client";

import { useEffect, useRef, useState } from "react";

function JourneyItem({ role, company, duration, desc, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        relative pl-6
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Timeline dot */}
      <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-color" style={{ color: "var(--color-primary, #f59300)" }}/>

      <h3 className="text-base font-semibold text-gray-800">
        {role}
      </h3>

      <p className="text-sm text-gray-500">
        {company} · <span className="italic">{duration}</span>
      </p>

      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function ResumeApp() {
  const journey = [
    {
      role: "SDE Intern",
      company: "Connecticus Technologies, Pune",
      duration: "Jan 2024 – June 2024",
      desc:
        "Worked on real-world software development projects with a strong focus on Java-based backend systems, REST APIs, and frontend integration. Gained hands-on experience in writing clean, maintainable code and collaborating within Agile teams.",
    },
    {
      role: "Software Engineer (External)",
      company: "Siemens Digital Industries Software (DISW), Pune",
      duration: "June 2024 – May 2025",
      desc:
        "Contributed to enterprise-level software development as an external engineer. Worked on performance-focused features, code quality improvements, and production-grade systems following industry best practices.",
    },
  ];

  return (
    <div className="space-y-10 max-w-3xl">
      <p className="text-sm text-gray-700">
        Professional journey — <span className="font-medium">1 year 5 months</span> of experience.
      </p>

      <div className="relative border-l-2 border-gray-200 space-y-10">
        {journey.map((item, index) => (
          <JourneyItem
            key={item.role}
            {...item}
            delay={index * 150}
          />
        ))}
      </div>
    </div>
  );
}
