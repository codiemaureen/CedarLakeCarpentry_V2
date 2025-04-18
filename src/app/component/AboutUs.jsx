import style from '../component/AboutUs.module.css';

const AboutUs = () => {
  return (
    <div id='aboutUsContainer' className={style.aboutUsContainer}>
      <h2 className={style.aboutHeader}>About Us</h2>
      <p className={style.aboutDesc}>With over 100 years of combined experience, Cedar Lake Carpentry is the premier choice for luxury finished carpentry in the Greater Detroit area. We specialize in elevating new homes with exquisite trim work, custom built-ins, crown molding, and architectural detailing. Our team is dedicated to precision, elegance, and timeless craftsmanship—bringing refined beauty to every space we touch.</p>
    </div>
  )
}

export default AboutUs
