"use client";
import { courses } from "@/lib/courseData";
import { useHistoryQuery } from "@/redux/api/order/orderApi";
import { ICourse } from "@/types/course.type";
import { IOrder } from "@/types/order.type";
import Image from "next/image";
import React from "react";

export default function DashboardCoursePage() {
  const { data, isLoading } = useHistoryQuery(null);

  const orders = data?.data?.order;
  const myCourses = orders?.map(
    (el: IOrder) => courses[Number(el.courseId) - 1]
  );
  if (isLoading)
    return (
      <div className="flex justify-center min-h-[500px] items-center py-10 text-lg font-semibold text-blue-500">
        Loading your courses...
      </div>
    );

  if (!myCourses || myCourses.length === 0)
    return (
      <div className="flex flex-col items-center py-12 text-gray-500">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
          alt="Empty"
          height={200}
          width={200}
          className="w-32 h-32 mb-4 opacity-70"
        />
        <p className="text-lg font-medium">No purchased courses yet</p>
        <p className="text-sm text-gray-400">Start learning today!</p>
      </div>
    );

  return (
    <div className="overflow-x-auto  shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 ">My Course</h1>
      <table className="min-w-full border border-gray-200 bg-white rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Category
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Level</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Instructor
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Duration
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {myCourses.map((course: ICourse) => (
            <tr
              key={course?.id}
              className="border-b hover:bg-gray-50 transition duration-200"
            >
              <td className="px-6 py-4">
                <Image
                  src={course?.image}
                  alt={course?.title}
                  className="w-20 h-12 object-cover rounded-md"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-800">
                {course.title}
              </td>
              <td className="px-6 py-4 text-gray-600">{course?.category}</td>
              <td className="px-6 py-4 text-gray-600">{course?.level}</td>
              <td className="px-6 py-4 text-gray-600">{course?.instructor}</td>
              <td className="px-6 py-4 text-gray-600">{course?.duration}</td>
              <td className="px-6 py-4 font-semibold text-blue-600">
                ${course?.price}
              </td>
              <td className="px-6 py-4 text-yellow-500 font-medium">
                ⭐ {course?.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
