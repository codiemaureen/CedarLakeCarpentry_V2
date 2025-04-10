import style from '../component/Header.module.css';


const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={style.headerTitle}>Cedar Lake Carpentry</h1>
      <img src='pexels-spencphoto-28518832.jpg' alt='header-img' className={style.headerImg}/>
    </div>
  )
}

export default Header
