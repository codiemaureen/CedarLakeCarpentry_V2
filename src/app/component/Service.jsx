import style from "../component/Service.module.css";

const Service = ({ service, onClick }) => {
  return (
    <article className={style.card} onClick={onClick}>
      <div className={style.imageWrapper}>
        <img src={service.image} alt={service.title} className={style.image} />

        <div className={style.overlay} />

        <div className={style.imageContent}>
          <p className={style.eyebrow}>{service.eyebrow}</p>
          <h3 className={style.cardTitle}>{service.title}</h3>
        </div>
      </div>

      <div className={style.cardBody}>
        <p className={style.text}>{service.description}</p>
      </div>
    </article>
  );
};

export default Service;