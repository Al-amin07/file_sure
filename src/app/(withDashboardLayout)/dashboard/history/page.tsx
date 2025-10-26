"use client";
import { courses } from "@/lib/courseData";
import { useHistoryQuery } from "@/redux/api/order/orderApi";
import { IOrder } from "@/types/order.type";
import Image from "next/image";
import React from "react";

export default function HistoryPage() {
  const { data, isLoading } = useHistoryQuery(null);
  console.log({ data });
  const orders = data?.data?.order;
  if (isLoading)
    return (
      <div className="flex justify-center min-h-[500px] items-center py-10 text-lg font-semibold text-blue-500">
        Loading your history...
      </div>
    );

  if (!orders || orders.length === 0)
    return (
      <div className="flex flex-col items-center py-12 text-gray-500">
        <Image
          height={200}
          width={200}
          src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
          alt="Empty"
          className="w-32 h-32 mb-4 opacity-70"
        />
        <p className="text-lg font-medium">No purchased order yet</p>
        <p className="text-sm text-gray-400">Start learning today!</p>
      </div>
    );
  return (
    <div className=" bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 ">Order History</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Course Name</th>
              <th className="py-3 px-4 text-left">Transaction Id</th>

              <th className="py-3 px-4 text-left">Payment Method</th>
              <th className="py-3 px-4 text-left">Card Number</th>
              {/* <th className="py-3 px-4 text-left">Expiry</th>
              <th className="py-3 px-4 text-left">CVC</th> */}
              <th className="py-3 px-4 text-left">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders?.map((order: IOrder, idx: number) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-4 flex items-center gap-2">
                  <Image
                    src={courses[Number(order?.courseId) - 1].image}
                    alt={courses[Number(order?.courseId) - 1].title}
                    height={70}
                    width={70}
                    className="object-cover rounded-md"
                  />
                  {courses[Number(order?.courseId) - 1].title}
                </td>
                <td className="py-3 px-4">{order._id}</td>

                <td className="py-3 px-4 capitalize">{order.paymentMethod}</td>
                <td className="py-3 px-4">{order.cardNumber}</td>
                {/* <td className="py-3 px-4">{order.expiry}</td>
                <td className="py-3 px-4">{order.cvc}</td> */}
                <td className="py-3 px-4">${order.price.toFixed(2)}</td>
                {/* <td className="py-3 px-4">{order.courseId}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
