import style from "../component/Service.module.css";

const Service = ({ service }) => {
  return (
    <article className={style.card}>
      <div className={style.imageWrapper}>
        <img
          src={service.image}
          alt={service.title}
          className={style.image}
        />

        <div className={style.overlay} />

        <div className={style.imageContent}>
          <p className={style.eyebrow}>{service.eyebrow}</p>
          <h3 className={style.cardTitle}>{service.title}</h3>
        </div>
      </div>

      <div className={style.cardBody}>
        <p className={style.text}>{service.description}</p>
          
        {/* <a href="#gallery" className={style.link}>
          View real projects →
        </a> */}
      </div>
    </article>
  );
};

export default Service;