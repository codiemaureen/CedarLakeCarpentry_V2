import styles from "../component/TrustSection.module.css"
function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <h2 className={styles.heading}>
          Trusted by Leading Luxury Home Builders<br />
          in Metro Detroit
      </h2>

      <div className={styles.logos}>
        <span>Robertson Brothers Homes</span>
        <span>Pulte Homes</span>
        <span>Toll Brothers</span>
        <span>MGM Homes</span>
        <span>Saske Construction</span>
      </div>
    </section>
  )
}

export default TrustSection
