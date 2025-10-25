import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "The React Advanced Patterns course completely changed the way I build components. It’s hands-down the best learning experience I’ve had!",
  },
  {
    id: 2,
    name: "James Lee",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    message:
      "Clear explanations, real-world projects, and top-notch content — this course helped me master concepts I struggled with for months.",
  },
  {
    id: 3,
    name: "Sophia Patel",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Beautifully structured and very practical! The lessons helped me collaborate better with developers and understand React deeply.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Students Say
        </h2>
        <p className="text-gray-500 mb-12">
          Hear from our learners who transformed their skills and careers with
          our courses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  height={200}
                  width={200}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-500/20"
                />
                <p className="text-gray-600 italic mb-4">“{t.message}”</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-blue-500 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
