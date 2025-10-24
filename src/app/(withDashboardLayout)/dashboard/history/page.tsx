"use client";
import { courses } from "@/lib/courseData";
import { useHistoryQuery } from "@/redux/api/order/orderApi";
import { IOrder } from "@/types/order.type";
import React from "react";

export default function page() {
  const { data } = useHistoryQuery(null);
  console.log({ data });
  const orders = data?.data?.order;
  return (
    <div className=" bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 ">Order History</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Transaction Id</th>

              <th className="py-3 px-4 text-left">Payment Method</th>
              <th className="py-3 px-4 text-left">Card Number</th>
              <th className="py-3 px-4 text-left">Expiry</th>
              <th className="py-3 px-4 text-left">CVC</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Course Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders?.map((order: IOrder, idx: number) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-4">{order._id}</td>

                <td className="py-3 px-4 capitalize">{order.paymentMethod}</td>
                <td className="py-3 px-4">{order.cardNumber}</td>
                <td className="py-3 px-4">{order.expiry}</td>
                <td className="py-3 px-4">{order.cvc}</td>
                <td className="py-3 px-4">${order.price.toFixed(2)}</td>
                <td className="py-3 px-4">
                  {courses[Number(order?.courseId) - 1].title}
                </td>
                {/* <td className="py-3 px-4">{order.courseId}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
