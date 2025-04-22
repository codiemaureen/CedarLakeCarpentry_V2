import Link from 'next/link';
import style from '../component/NavBar.module.css';


const NavBar = () => {
    let navItems = [
    {id: 0, title:'home', link: ''}, 
    {id: 1, title:'about', link:"#aboutUsContainer" } , 
    {id: 2, title: 'services', link: "#servicesContainer" }, ,
    {id: 3, title: 'Get a Quote', link: '' }
  ]
  return (
    <nav className={style.navBarContainer}>
      {navItems.map((items) => (
        <ul key={items.id} className={style.navBar}>
          <li  className={style.navItem}><Link href={items.link}>{items.title}</Link></li>
        </ul>
      ))}
    </nav>
  )
}

export default NavBar
