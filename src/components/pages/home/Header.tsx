import React from "react";
import bg from "@/assets/o1.jpg";
import Image from "next/image";

export default function Header() {
  const categories = [
    "Web Development",
    "AI",
    "Design",
    "Mobile",
    "Cloud",
    "Marketing",
  ];

  return (
    <header className="relative h-[400px] rounded-md md:h-[500px] w-full text-white">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Header Background"
        fill
        className="object-cover"
        quality={100}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full text-center">
        {/* Heading */}
        <h1 className="text-3xl  md:text-4xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-pink-500 to-yellow-500 animate-gradient">
          Find Your Next Course
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-8 text-gray-200">
          Explore thousands of online courses by skill, topic, or instructor.
        </p>

        {/* Search */}
        {/* <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-6 py-4 rounded-l-lg text-white md:rounded-l-lg  w-full md:w-1/2 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
          />
          <button className="bg-indigo-400 hover:bg-indigo-500 px-8 py-4 rounded-r-lg font-semibold text-gray-900 shadow-lg transition transform hover:scale-105">
            Search
          </button>
        </div> */}

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((cat) => (
            <span
              key={cat}
              className="bg-white/20 hover:bg-white/40 px-3 md:px-5 py-2 rounded-full cursor-pointer transition transform hover:scale-110"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
