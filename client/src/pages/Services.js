// client/src/pages/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 'cleaning', name: 'Cleaning', image: '/images/cleaning.png' },
  { id: 'plumbing', name: 'Plumbing', image: '/images/plumbing.png' },
  { id: 'electrical', name: 'Electrical', image: '/images/electrical.png' },
];

const Services = () => {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    localStorage.setItem('selectedService', id);
    navigate('/select-date');
  };

  return (
    <div>
      <h2>Select a Service</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {services.map((service) => (
          <div key={service.id} onClick={() => handleSelect(service.id)}>
            <img src={service.image} alt={service.name} width="100" />
            <h4>{service.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;