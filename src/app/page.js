import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header";
import ServiceContainer from "./component/ServiceContainer";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";
import ContactContainer from "./component/ContactContainer";
import NavBar from "./component/NavBar";


export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <Header/>
      <ServiceContainer />
      <AboutUs />
      <ContactContainer />
      <Footer />
    </div>
  );
}
