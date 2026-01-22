import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-800 to-blue-800 px-6 overflow-hidden">

      {/* Background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl"></div>

      <div className="relative flex items-center justify-center">

        {/* Outer ring */}
        <div className="absolute w-[460px] h-[460px] rounded-full border border-white/30"></div>

        {/* Inner ring */}
        <div className="absolute w-[430px] h-[430px] rounded-full border border-white/20"></div>

        {/* Main circle */}
        <div className="relative w-[400px] h-[400px] rounded-full bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

          {/* Soft highlight */}
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-white via-white to-indigo-100/40"></div>

          {/* Decorative shapes */}
          <div className="absolute top-10 left-12 w-20 h-20 rounded-full bg-indigo-100/80"></div>
          <div className="absolute bottom-14 right-14 w-28 h-28 rounded-full bg-purple-100/80"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-blue-100/80"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1 tracking-tight">
              Zainab Ometere
            </h1>
            <h2 className="text-lg uppercase tracking-widest text-indigo-600 mb-4">
              Frontend Developer
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-7 max-w-xs">
              I build responsive and user-friendly web interfaces using modern frontend technologies.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow hover:bg-indigo-700 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-indigo-600 text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
