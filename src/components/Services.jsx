import React from 'react';
import servicesData from '../data/servicesData.js';

function Services() {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          {servicesData.map((service) => (
            <div key={service.id}>
              <i className={service.iconClass} />
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <a href={service.link}>{service.linkLabel}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
