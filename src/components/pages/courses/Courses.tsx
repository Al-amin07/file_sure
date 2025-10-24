"use client";

import { useState, useMemo } from "react";

import { courses } from "@/lib/courseData";
import { ICourse } from "@/types/course.type";
import FilterSidebar from "./FIlterSidebar";
import CourseCard from "./CourseCard";

export default function CoursesPage({}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<
    "price-low" | "price-high" | "rating" | "students"
  >("rating");

  const categories = [
    "All",
    ...new Set(courses.map((c: ICourse) => c.category)),
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = useMemo(() => {
    const filtered = courses.filter((course: ICourse) => {
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLevel && matchesSearch;
    });

    filtered.sort((a: ICourse, b: ICourse) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "students":
          return b.students - a.students;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, selectedLevel, searchQuery, sortBy]);

  const handleReset = () => {
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSearchQuery("");
    setSortBy("rating");
  };

  return (
    <div className="min-h-screen ">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Courses</h1>
          <p className="text-gray-600">
            Discover {filteredCourses.length} courses
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar
            categories={categories}
            levels={levels}
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
            searchQuery={searchQuery}
            sortBy={sortBy}
            onCategoryChange={setSelectedCategory}
            onLevelChange={setSelectedLevel}
            onSearchChange={setSearchQuery}
            onSortChange={setSortBy}
            onReset={handleReset}
          />

          <div className="flex-1">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCourses.map((course: ICourse) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-xl text-gray-600 mb-4">
                  No courses found matching your filters
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
