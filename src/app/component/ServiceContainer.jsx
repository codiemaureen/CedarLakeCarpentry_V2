"use client";

import style from "../component/ServiceContainer.module.css";
import Service from "./Service";
import { useState, useEffect } from "react";

const ServiceContainer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <section id="services" className={style.serviceContainer}>
      <div className={style.header}>
        <div>
          <p className={style.kicker}>Real Project Work</p>
          <h2 className={style.title}>Services backed by real craftsmanship.</h2>
          <p className={style.servicesDesc}>
            Every service we offer is supported by real project work. What you see here is the standard we bring to every build.
          </p>
        </div>

        <a href="#contactus" className={style.cta}>
          Request a Bid
        </a>
      </div>

      <div className={style.serviceWrapper}>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceContainer;