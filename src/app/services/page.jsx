import React from "react";
import ServiceCard from "../component/cards/ServiceCard";

const getAllServices = async () => {
  const res = await fetch(`http://localhost:3000/api/services`);
  const data = await res.json();

  return data;
};

const ServicesPage = async () => {
  const services = await getAllServices();
  console.log(services);
  return (
    <div>
      <h2>All Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
