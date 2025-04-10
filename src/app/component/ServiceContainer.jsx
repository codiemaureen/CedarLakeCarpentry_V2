"use client";
import style from '../component/ServiceContainer.module.css';
import Service from './Service';
import { useState, useEffect } from 'react';

const ServiceContainer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
    .then((response) => response.json())
    .then((data) => setServices(data.services))      
    .catch((error) => console.error("Error fetching services:", error));
  }, []);
  return (
    <div className={style.serviceContainer}>
      <p>Services</p>
      <div>
      {services.map((service) => (
        <div key={service.id}>
          <Service service={service}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ServiceContainer
