import React from "react";
import { projects } from "../data"; // Import the array from data.js

 export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {project.tech}</p>
              {project.live ? (
                <a href={project.link} className="text-indigo-600 font-semibold">
                  View Project
                </a>
              ) : (
                <span className="text-gray-400 font-semibold">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


