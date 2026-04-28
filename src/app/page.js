import styles from "./page.module.css";
import Header from "./component/Header";
import ServiceContainer from "./component/ServiceContainer";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";
import ContactContainer from "./component/ContactContainer";
import TrustSection from "./component/TrustSection";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <TrustSection />
      <ServiceContainer />
      <AboutUs />
      <ContactContainer />
      <Footer />
    </div>
  );
}
