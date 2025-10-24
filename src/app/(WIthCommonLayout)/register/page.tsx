"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/api/auth/authApi";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { login } from "@/redux/features/user/userSlice";
import { signupSchema } from "@/schemas/auth.schema";

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const referralCode = searchParams.get("r");
  console.log({ referralCode });
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const [registerUser, { isLoading }] = useRegisterMutation();
  const onSubmit = async (data: SignupFormData) => {
    console.log({ data });
    try {
      const res = await registerUser({ data, referralCode }).unwrap();
      console.log({ res });
      if (res.success) {
        const token = res?.data?.accessToken;
        const decoded = jwtDecode(token);

        dispatch(login({ user: decoded, accessToken: token }));
        router.push("/");
        toast.success(res?.message || "Registration Successfull");
      } else {
        throw Error(res?.message || "Registration Failed");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className=" flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Join Referral Hub
            </h1>
            <p className="text-gray-600">
              {referralCode
                ? "You were invited to join!"
                : "Create your account"}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register("name")}
                className={`w-full px-4 py-2 border text-black rounded-lg focus:outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className={`w-full px-4 py-2 text-black border rounded-lg focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm  font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                className={`w-full px-4 py-2 border text-black rounded-lg focus:outline-none ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Referral Code */}
            {referralCode && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-900">
                  <strong>Referral Code:</strong> {referralCode}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full disabled:opacity-70 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {isLoading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
