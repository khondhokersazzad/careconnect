import ServiceDetailsCard from '@/app/component/cards/ServiceDetailsCard';
import React from 'react';

const getSingleService = async () =>{
  const res = await fetch(`http://localhost:3000/api/services/`);
  const data = await res.json();
  return data ;
}

const ServiceDetailPage = async ({params}) => {
  const {id} = await params;
  const services = await getSingleService();
  const service = services.find(s => s.id === id);
  
  return (
    <div>
      <ServiceDetailsCard service={service}></ServiceDetailsCard>
    </div>
  );
};

export default ServiceDetailPage;