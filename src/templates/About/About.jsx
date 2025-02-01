import styles from "./style.module.scss";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>

      {/* Historique de l'entreprise */}
      <section className={styles.history}>
        <h2>Our History</h2>
        <p>
          Founded in [Year], our company has been a leader in the [Industry] industry,
          continuously growing and adapting to meet the needs of our clients. From a small
          team to a full-fledged enterprise, we have always prioritized innovation and quality.
        </p>
      </section>

      {/* Valeurs et engagements */}
      <section className={styles.values}>
        <h2>Our Values & Commitments</h2>
        <p>
          We are committed to providing exceptional service while upholding the values of integrity, 
          trust, and customer satisfaction. We believe in sustainable practices, diversity, and continuous
          improvement to create a positive impact on the community and the environment.
        </p>
      </section>

      {/* La team */}
      <section className={styles.team}>
        <h2>Meet the Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.member}>
            <img src="/path/to/member1.jpg" alt="Member 1" className={styles.memberImage} />
            <h3>Ravina</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.member}>
            <img src="/path/to/member2.jpg" alt="Member 2" className={styles.memberImage} />
            <h3>Manitrasina</h3>
            <p>COO</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>
    </div>
  );
}
