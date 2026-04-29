"use client";

import style from "../component/ServiceContainer.module.css";
import serviceStyle from "../component/Service.module.css";
import Service from "./Service";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "./ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServiceContainer = () => {
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const activeService =
    activeIndex !== null ? services[activeIndex] : null;

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="services" className={style.serviceContainer}>
      <div className={style.header}>
        <div>
          <p className={style.kicker}>Craftsmanship in Every Detail</p>
          <h2 className={style.title}>Services backed by real craftsmanship.</h2>
          <p className={style.servicesDesc}>
            Every service we offer is supported by real project work. What you see here is the standard we bring to every build.
          </p>
        </div>

        <a href="#contactus" className={style.cta}>
          Request a Bid <span>→</span>
        </a>
      </div>

      <div className={style.serviceWrapper}>
        {services.map((service, index) => (
          <Service
            key={service.id}
            service={service}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        {activeService && (
          <DialogContent>
            <button
              className={serviceStyle.arrowLeft}
              onClick={goPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={34} />
            </button>

            <img
              src={activeService.image}
              alt={activeService.title}
              className={serviceStyle.expandedImage}
            />

            <button
              className={serviceStyle.arrowRight}
              onClick={goNext}
              aria-label="Next image"
            >
              <ChevronRight size={34} />
            </button>

            <div className={serviceStyle.expandedText}>
              <p className={serviceStyle.expandedEyebrow}>
                {activeService.eyebrow}
              </p>
              <h3 className={serviceStyle.expandedTitle}>
                {activeService.title}
              </h3>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ServiceContainer;