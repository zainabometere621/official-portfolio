import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white rounded-full shadow text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


