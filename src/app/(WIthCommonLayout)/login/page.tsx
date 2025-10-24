"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import loginSchema from "@/schemas/loginSchema";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schemas/auth.schema";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginUser(data).unwrap();
      console.log({ res });
      if (res.success) {
        const token = res?.data?.accessToken;
        const decoded = jwtDecode(token);

        dispatch(login({ user: decoded, accessToken: token }));
        router.push("/dashboard");
        toast.success(res?.message || "Login Successfull");
      } else {
        throw Error(res?.message || "Login Failed");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)]  items-center justify-center ">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register("email")}
              className={`w-full rounded-lg border text-black px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className={`w-full rounded-lg border text-black px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
