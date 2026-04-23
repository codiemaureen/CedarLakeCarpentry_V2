import style from '../component/Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <a href='/'>Return to Home</a>
      <p>Website built by <a href="https://codiegroth.com/">Codie Groth</a></p>
    </div>
  )
}

export default Footer
