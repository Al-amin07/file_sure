/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import machine from "@/assets/machine.jpg";
import { courses } from "@/lib/courseData";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/features/user/userSlice";
import { billingSchema } from "@/schemas/auth.schema";
import { useOrderMutation } from "@/redux/api/order/orderApi";
import { toast } from "sonner";
interface PageProps {
  params: {
    id: string;
  };
}

type BillingForm = z.infer<typeof billingSchema>;

export default function CheckoutPage({ params }: PageProps) {
  const id = params.id;
  console.log({ id });
  const user = useAppSelector(selectUser);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const course = courses.find((el) => el.id === Number(id));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingForm>({
    resolver: zodResolver(billingSchema),
    defaultValues: {
      fullName: "",
      email: user?.email || "",
      paymentMethod: "credit",
      cardNumber: "",
      expiry: "",
      cvc: "",
    },
  });
  const [order] = useOrderMutation();
  if (!course) return <div>Course not found</div>;

  const onSubmit = async (data: BillingForm) => {
    console.log("Form Submitted:", data);
    if (!user) {
      toast.error("Please login first");
      return;
    }
    try {
      const res = await order({
        ...data,
        price: course.price,
        orderBy: user?.id,
        courseId: id,
      }).unwrap();
      console.log({ res });
      if (res.success) {
        toast.success("Successfully enrolled");
      } else {
        throw Error(res?.message || "Failed to enroll");
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to enroll");
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Checkout
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Billing & Payment Form */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Billing Information
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName")}
                  className="p-3 rounded-lg border border-gray-300 w-full"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                  disabled
                  className="p-3 rounded-lg border border-gray-300 w-full"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-4 text-gray-800">
              Payment Details
            </h3>
            <div className="flex flex-col gap-3">
              {["credit", "paypal", "crypto"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition hover:border-indigo-500"
                >
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method as any)}
                    className="accent-indigo-500"
                  />
                  {method === "credit"
                    ? "Credit / Debit Card"
                    : method.charAt(0).toUpperCase() + method.slice(1)}
                </label>
              ))}
              {errors.paymentMethod && (
                <span className="text-red-500 text-sm">
                  {errors.paymentMethod.message}
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex flex-col gap-1 flex-1">
                <input
                  type="text"
                  placeholder="Card Number"
                  {...register("cardNumber")}
                  className="p-3 rounded-lg border border-gray-300 w-full"
                />
                {errors.cardNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.cardNumber.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <input
                  type="text"
                  placeholder="MM/YY"
                  {...register("expiry")}
                  className="p-3 rounded-lg border border-gray-300 w-full"
                />
                {errors.expiry && (
                  <span className="text-red-500 text-sm">
                    {errors.expiry.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <input
                  type="text"
                  placeholder="CVC"
                  {...register("cvc")}
                  className="p-3 rounded-lg border border-gray-300 w-full"
                />
                {errors.cvc && (
                  <span className="text-red-500 text-sm">
                    {errors.cvc.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Pay ${(course.price * 1.1).toFixed(2)}
            </button>
          </form>
        </div>

        {/* Right: Course Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
          <Image
            src={course.image}
            alt={course.title}
            className="rounded-lg object-cover w-full h-48"
            width={400}
            height={300}
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {course.title}
          </h3>
          <p className="text-gray-600 text-sm">{course.description}</p>
          <div className="flex justify-between text-gray-700 mt-2">
            <span>Instructor:</span>
            <span>{course.instructor}</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-1">
            <span>Duration:</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-1">
            <span>Level:</span>
            <span>{course.level}</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-1">
            <span>Category:</span>
            <span>{course.category}</span>
          </div>

          <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>${(course.price * 1.1).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
