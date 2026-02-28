import React from 'react';

const ServiceDetailsSkeleton = () => {
  return (
     <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-pulse">
      
      <div className="grid md:grid-cols-2 gap-8 p-8">
        
        {/* Left: Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-300 rounded-2xl"></div>

        {/* Right: Content Skeleton */}
        <div className="space-y-6">
          
          {/* Title */}
          <div className="h-8 bg-gray-300 rounded w-2/3"></div>

          {/* Rating */}
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>

          {/* Description lines */}
          <div className="space-y-3 pt-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>

          {/* Info Section */}
          <div className="space-y-3 pt-6">
            <div className="h-5 bg-gray-300 rounded w-1/3"></div>
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
            <div className="h-5 bg-gray-300 rounded w-2/3"></div>
          </div>

          {/* Features List */}
          <div className="space-y-2 pt-6">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-3/5"></div>
          </div>

          {/* Button */}
          <div className="h-12 bg-gray-300 rounded-xl w-1/3 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSkeleton;