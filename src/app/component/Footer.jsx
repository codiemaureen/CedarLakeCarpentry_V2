import style from '../component/Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <p>footer</p>
      <p>Header Image by Photo by <a href='https://www.pexels.com/photo/carpenter-using-circular-saw-for-precise-woodcutting-28518832/' alt='header-photo-cred'>Mario</a></p>
    </div>
  )
}

export default Footer
