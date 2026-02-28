import ServiceDetailsSkeleton from '@/app/component/cards/ServiceDetailsSkeleton';
import React from 'react';

const loading = () => {
  return (
    <div>
      <ServiceDetailsSkeleton></ServiceDetailsSkeleton>
    </div>
  );
};

export default loading;