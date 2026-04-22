import style from '../component/AboutUs.module.css';

const AboutUs = () => {
  return (
    <div id='aboutUsContainer' className={style.aboutUsContainer}>
      <h2 className={style.aboutHeader}>ABOUT CEDAR LAKE  CARPENTRY</h2>
      <p className={style.aboutDesc}>

<p>Cedar Lake Finish Carpentry partners with builders across Metro Detroit to deliver high-quality residential finish work—on schedule, on spec, and without the headaches.</p>
<br/>
<p>With over 120 years of combined experience, our team has supported both production and custom home builders, including Robertson Brothers Homes, Pulte Homes, Toll Brothers, MGM Homes, and Saske Construction. We understand the demands of a job site and the importance of keeping projects moving without sacrificing quality.</p>
<br/>
<p>Builders choose Cedar Lake because we’re consistent, reliable, and easy to work with. We show up prepared, communicate clearly with supers and trades, and execute clean, detailed work that meets expectations the first time. From trim and molding to cabinetry, built-ins, and custom features, our focus is simple—deliver results you don’t have to think twice about.</p>
<br/>
<p>If you’re looking for a finish carpentry crew that can step in, stay on schedule, and represent your build with professionalism, we’re ready to help.</p>
<br/>
<p><strong>Have an upcoming project or need additional support? Let’s connect.</strong></p>
</p>
<div className={style.ctaGroup}>
  <a href="tel:15863225234" className={style.ctaBtnPrimary}>
    Call Now
  </a>
  <a href="sms:15863225234" className={style.ctaBtnSecondary}>
    Text Us
  </a>
</div>
    </div>
  )
}

export default AboutUs
