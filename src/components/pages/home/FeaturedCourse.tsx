import { courses } from "@/lib/courseData";
import React from "react";
import CourseCard from "../courses/CourseCard";
import Link from "next/link";

export default function FeaturedCourse() {
  return (
    <section className="">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">Featured Courses</h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Expand your skills with our top courses
          </p>
        </div>
        <Link
          href={"/courses"}
          className="px-4 md:px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
        >
          View All Courses
        </Link>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.slice(0, 6).map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
