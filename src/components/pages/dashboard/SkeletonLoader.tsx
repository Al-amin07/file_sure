import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 animate-pulse">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-600">
        <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
        <div className="h-8 w-20 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-32 bg-gray-200 rounded"></div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
        <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>
        <div className="h-8 w-16 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-28 bg-gray-200 rounded"></div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
        <div className="h-4 w-28 bg-gray-200 rounded mb-3"></div>
        <div className="h-5 w-40 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
