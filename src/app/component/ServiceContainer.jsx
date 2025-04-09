import style from '../component/ServiceContainer.module.css';
import Service from './Service';

const ServiceContainer = () => {
  return (
    <div className={style.serviceContainer}>
      <p>Services</p>
      <Service/>
    </div>
  )
}

export default ServiceContainer
