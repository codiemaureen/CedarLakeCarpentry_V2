import style from '../component/Service.module.css';

const Service = ({service}) => {
  return (
    <div className={style.idvService}>
      <h3 className={style.serviceTitle}>{service.title}</h3>
      <img src={service.imgUrl} alt={service.title} className={style.serviceImg}/>
      <p className={style.serviceDescription}>{service.description}</p>
    </div>
  )
}

export default Service
