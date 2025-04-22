import style from '../component/Header.module.css';
import { Bevan, Inter } from 'next/font/google';

const bevan = Bevan({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bevan',
})

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <h1 className={`${style.headerTitle} ${bevan.className}`}>Cedar Lake Carpentry</h1>
      <img src='pexels-spencphoto-28518832.jpg' alt='header-img' className={style.headerImg}/>
    </div>
  )
}

export default Header
