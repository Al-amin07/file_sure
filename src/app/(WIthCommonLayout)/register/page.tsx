"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🔹 Zod validation schema
const signupSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name too long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [referralCode, setReferralCode] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  // Get referral code from URL
  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      setReferralCode(ref);
    }
  }, [searchParams]);

  // Handle form submit
  const onSubmit = (data: SignupFormData) => {
    const { fullName, email, password } = data;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // check existing email
    if (users.some((u: any) => u.email === email)) {
      setError("email", { message: "Email already registered" });
      return;
    }

    // Find referrer
    let referrerId: string | null = null;
    if (referralCode) {
      const referrer = users.find((u: any) => u.referralCode === referralCode);
      if (referrer) {
        referrerId = referrer.id;
      }
    }

    // Create new user
    const newUser = {
      id: crypto.randomUUID(),
      fullName,
      email,
      password,
      credits: 0,
      referralCode: `REF${Math.random()
        .toString(36)
        .substring(2, 7)
        .toUpperCase()}`,
      referredBy: referrerId,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Record referral
    if (referrerId) {
      const referrals = JSON.parse(localStorage.getItem("referrals") || "[]");
      referrals.push({
        id: crypto.randomUUID(),
        referrerId,
        referredUserId: newUser.id,
        referredEmail: email,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("referrals", JSON.stringify(referrals));
    }

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
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
                {...register("fullName")}
                className={`w-full px-4 py-2 border text-black rounded-lg focus:outline-none ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.fullName.message}
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
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a
                href="/"
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
