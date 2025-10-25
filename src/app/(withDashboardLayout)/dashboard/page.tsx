"use client";
import ReferralLink from "@/components/pages/dashboard/ReferralLink";
import DashboardSkeleton from "@/components/pages/dashboard/SkeletonLoader";
import { useHistoryQuery } from "@/redux/api/order/orderApi";

export default function Dashboard() {
  const { data, isLoading } = useHistoryQuery(null);
  console.log(data);
  const user = data?.data?.user;
  const referrals = data?.data?.referral;

  return (
    <div>
      <div className=" ">
        {/* Stats Cards */}
        {isLoading ? (
          <DashboardSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-600">
              <p className="text-gray-600 text-sm font-medium mb-1">
                Total Credits
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {user?.balance}
              </p>
              <p className="text-gray-500 text-xs mt-2">Available balance</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <p className="text-gray-600 text-sm font-medium mb-1">
                Referrals
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {referrals?.length  }
              </p>
              <p className="text-gray-500 text-xs mt-2">Active referrals</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
              <p className="text-gray-600 text-sm font-medium mb-1">
                Referral Code
              </p>
              <p className="text-lg font-mono font-bold text-gray-900">
                {user?.referralCode}
              </p>
              <p className="text-gray-500 text-xs mt-2">Share to earn</p>
            </div>
          </div>
        )}
      </div>
      <ReferralLink isLoading={isLoading} referrals={referrals} />
    </div>
  );
}
