import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header";
import ServiceContainer from "./component/ServiceContainer";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <ServiceContainer />
      <AboutUs />
      <Footer />
    </div>
  );
}
