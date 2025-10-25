import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
interface IProps {
  status: "PENDING" | "CONVERTED";
}
export default function ReferralLink({
  referrals,
  isLoading,
}: {
  referrals: IProps[];
  isLoading: boolean;
}) {
  const user = useAppSelector(selectUser);
  const [copied, setCopied] = useState(false);
  const referralLink = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/register?r=${user?.referalCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const convertedUser = referrals?.filter((el) => el.status === "CONVERTED");
  return (
    <div className="space-y-6  ">
      <div className="">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Your Referral Link
        </h3>
        <div className="flex    gap-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition duration-200"
          >
            Copy
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <div>
        {isLoading ? (
          // Skeleton Loader
          <div className="space-y-3 mt-5 animate-pulse">
            <div className="bg-gray-100 rounded-lg shadow-md p-4">
              <div className="h-6 w-40 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-60 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-48 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-56 bg-gray-200 rounded mb-2"></div>
            </div>
          </div>
        ) : referrals?.length === 0 ? (
          // Empty State
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              No referrals yet. Share your link to get started!
            </p>
          </div>
        ) : (
          // Referral Table
          <div className="space-y-3">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Metric</th>
                    <th className="py-3 px-4 text-left">Values</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="py-3 px-4 flex items-center gap-2">
                      Referred Users
                    </td>
                    <td className="py-3 px-4">{referrals?.length}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 flex items-center gap-2">
                      Converted Users (who purchased)
                    </td>
                    <td className="py-3 px-4">{convertedUser?.length}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 flex items-center gap-2">
                      Total Credits Earned
                    </td>
                    <td className="py-3 px-4">{convertedUser?.length * 2}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
