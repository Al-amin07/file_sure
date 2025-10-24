import { ICourse } from "@/types/course.type";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({
  id,
  title,
  description,
  category,
  level,
  price,
  rating,
  students,
  image,
  instructor,
  duration,
}: ICourse) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 bg-gray-200 overflow-hidden">
        <Image
          src={(image as string) || "/placeholder.svg"}
          alt={title}
          height={400}
          width={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(
              level
            )}`}
          >
            {level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        {/* Instructor */}
        <p className="text-sm text-gray-700 font-medium mb-3">
          By {instructor}
        </p>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold text-gray-900">{rating}</span>
            <span className="text-gray-500">
              ({students.toLocaleString()} students)
            </span>
          </div>
          <span className="text-gray-600">{duration}</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-indigo-600">${price}</span>
          <Link
            href={`/checkout/${id}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
}
