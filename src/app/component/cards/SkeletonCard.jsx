import React from 'react';

const SkeletonCard = () => {
  return (
  
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-52 bg-gray-300"></div>

      <div className="p-5 space-y-4">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>

        <div className="flex justify-between items-center pt-2">
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
          <div className="h-8 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}




export default SkeletonCard;