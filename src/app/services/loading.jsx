import React from 'react';
import SkeletonCard from '../component/cards/SkeletonCard';

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(12)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default loading;