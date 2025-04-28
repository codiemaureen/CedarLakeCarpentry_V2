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
    <div id='serviceContainer' className={style.serviceContainer}>
      <h2>Services</h2>
      <p className={style.servicesDesc}>At Cedar Lake Carpentry, craftsmanship isn’t just a service — it’s an art. We bring unmatched skill, attention to detail, and luxury craftsmanship to every project, transforming beautiful homes into masterpieces. From custom cabinetry to dramatic coffered ceilings, every element we create is built to elevate, impress, and endure.</p>
      <div className={style.serviceWrapper}>
      {services.map((service) => (
        <div key={service.id} >
          <Service service={service}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ServiceContainer
