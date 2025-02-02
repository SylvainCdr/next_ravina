import styles from "./style.module.scss";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
    <div className={styles.hero}>

      <h1>About Ravina</h1>
</div>
      {/* Company History */}
      <section className={styles.history}>
        <h2>Our History</h2>
        <p>
          Founded in Madagascar, <strong>Ravina</strong> is a leading exporter of medicinal plants, 
          specializing in <strong>Centella Asiatica</strong>. Our mission is to provide the 
          highest quality Centella Asiatica, rich in bioactive molecules, to customers worldwide.  
          We source our plants from diverse regions across Madagascar, ensuring sustainable  
          and ethical harvesting practices while preserving the natural ecosystem.
        </p> 
        <img src="/assets/mg.svg" alt="" />
      </section>

      {/* Values & Commitments */}
      <section className={styles.values}>
        <h2>Our Values & Commitments</h2>
        <p>
          At <strong>Ravina</strong>, we believe in excellence, sustainability, and community empowerment.  
          Our commitment extends beyond delivering premium Centella Asiatica — we actively support  
          the local economy by collaborating with hundreds of harvesters across Madagascar.  
          By promoting fair trade and ethical sourcing, we contribute to economic growth  
          and environmental preservation.
        </p>
        <p>
          We take pride in our rigorous quality control, ensuring that every batch of  
          Centella Asiatica meets the highest international standards. Our passion for  
          natural health solutions drives us to maintain transparency and integrity  
          in every step of our process.
        </p>
      </section>


      <section className={styles.illustrations}>
<img src="https://images.unsplash.com/photo-1592997572749-3f3e7e9bf05b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1hZGFnYXNjYXJ8ZW58MHwwfDB8fHwy" alt="" />
<img src="https://images.unsplash.com/photo-1504598578017-40d9b776f1bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     <img src="https://images.unsplash.com/photo-1649187642101-6317f194bc1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </section>

      {/* Meet the Team */}
      <section className={styles.team}>
        <h2>Meet the Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.member}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Lova Tiana Randrianarivelo" className={styles.memberImage} />
            <h3>Lova Tiana Randrianarivelo</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.member}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Team Member" className={styles.memberImage} />
            <h3>Key Team Member</h3>
            <p>Operations Manager</p>
          </div>
          <div className={styles.member}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Team Member" className={styles.memberImage} />
            <h3>Key Team Member</h3>
            <p>Operations Manager</p>
          </div>
          <div className={styles.member}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Team Member" className={styles.memberImage} />
            <h3>Key Team Member</h3>
            <p>Operations Manager</p>
          </div>
          <div className={styles.member}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Team Member" className={styles.memberImage} />
            <h3>Key Team Member</h3>
            <p>Operations Manager</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}
