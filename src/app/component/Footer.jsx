import style from '../component/Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <p>Website built by <a href="https://codiemaureen.netlify.app/">Codie Groth</a></p>
      <p>Header Image by Photo by <a href='https://www.pexels.com/photo/carpenter-using-circular-saw-for-precise-woodcutting-28518832/' alt='header-photo-cred'>Mario</a></p>
      <p>Services Images by <a href='https://www.pexels.com/photo/couch-with-blue-pillows-in-a-living-room-5178068/'>Curtis</a></p>
    </div>
  )
}

export default Footer
