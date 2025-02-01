import Image from "next/image";
import styles from "./style.module.scss";
import Head from "next/head";

export default function CentellaAsiatica() {
  return (
    <>
      <Head>
        <title>Centella Asiatica - Benefits & Uses</title>
        <meta
          name="description"
          content="Discover the benefits of Centella Asiatica, a powerful medicinal plant used in healthcare, cosmetics, and wellness."
        />
      </Head>

      <div className={styles.centellaContainer}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Centella Asiatica</h1>
            <p>The powerful plant behind natural healing and skincare</p>
          </div>
        </div>

        {/* Introduction */}
        <section className={styles.introduction}>
          <div className={styles.text}>
            <h2>What is Centella Asiatica?</h2>
            <p>
              Centella Asiatica, also known as Gotu Kola or Tiger Grass, is a
              medicinal herb widely used in traditional Asian medicine. It has
              been valued for centuries for its remarkable properties in skin
              regeneration, cognitive enhancement, and wound healing. This plant
              grows in tropical wetlands and is packed with bioactive compounds
              that offer numerous health benefits.
            </p>
          </div>
          <div className={styles.imageGrid}>
            <div className={styles.imagePlaceholder}>
              <img src=" /assets/centella1.jpeg" alt="" />
            </div>
            <div className={styles.imagePlaceholder}>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1517498327491-f903e1e281cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHdlbGxuZXNzfGVufDB8fDB8fHwy"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Medicine Section */}
        <section className={styles.section}>
          <h2>Medicinal Uses</h2>
          <p>
          Centella Asiatica is widely recognized for its medicinal benefits, ranging from cognitive enhancement to wound
            healing. It has been shown to improve memory, reduce anxiety, and support cardiovascular health. Clinical
            studies suggest that its active compounds help regenerate nerve cells, making it a potential aid in
            neurological disorders.
          </p>
          <ul>
            <li><i class="fa-solid fa-check"></i>Enhances brain function and memory retention</li>
            <li><i class="fa-solid fa-check"></i>Reduces stress and anxiety levels</li>
            <li><i class="fa-solid fa-check"></i>Accelerates wound healing and tissue regeneration</li>
            <li><i class="fa-solid fa-check"></i>Improves blood circulation and vascular health</li>
          </ul>
          <div className={styles.imageGrid}>
            <div className={styles.imagePlaceholder}>
              {" "}
              <div className={styles.imagePlaceholder}>
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.imagePlaceholder}>
              {" "}
              <div className={styles.imagePlaceholder}>
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1492552085122-36706c238263?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGljaW5lJTIwaGVyYnN8ZW58MHx8MHx8fDI%3D"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.imagePlaceholder}>
              {" "}
              <div className={styles.imagePlaceholder}>
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhaW58ZW58MHx8MHx8fDI%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cosmetics Section */}
        <section className={styles.section}>
          <h2>Cosmetics & Skincare</h2>
          <p>
          One of the most well-known applications of Centella Asiatica is in skincare. Rich in antioxidants and collagen-
            boosting compounds, it is a key ingredient in many anti-aging and soothing formulations. It helps to reduce
            scars, calm inflammation, and maintain youthful, hydrated skin.
          </p>
          <ul>
            <li><i class="fa-solid fa-check"></i>Stimulates collagen production for firm and youthful skin</li>
            <li><i class="fa-solid fa-check"></i>Reduces wrinkles, fine lines, and skin sagging</li>
            <li><i class="fa-solid fa-check"></i>Heals acne scars and soothes irritated skin</li>
            <li><i class="fa-solid fa-check"></i>Hydrates and improves skin barrier function</li>
          </ul>
          <div className={styles.imageGrid}>
            <div className={styles.imagePlaceholder}>
              <img
                src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
      
            <div className={styles.imagePlaceholder}>
              <img
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className={styles.imagePlaceholder}>
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Wellness & Healthcare Section */}
        <section className={styles.section}>
          <h2>Wellness & Healthcare</h2>
          <p>
            Used in herbal teas and natural supplements, Centella Asiatica is renowned for its adaptogenic properties. It
            helps the body cope with stress, supports adrenal function, and enhances mental clarity. Additionally, it is
            known to detoxify the body and reduce inflammation, contributing to overall health and vitality.
          </p>
          <ul>
            <li><i class="fa-solid fa-check"></i>Promotes relaxation and stress relief</li>
            <li><i class="fa-solid fa-check"></i>Supports adrenal function and hormonal balance</li>
            <li><i class="fa-solid fa-check"></i>Improves digestion and detoxification</li>
            <li><i class="fa-solid fa-check"></i>Enhances sleep quality and mental clarity</li>
          </ul>
          <div className={styles.imageGrid}>
            <div className={styles.imagePlaceholder}>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1482100199117-a4a38a64e7e3?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className={styles.imagePlaceholder}>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1603206004639-22635b71ac08?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className={styles.imagePlaceholder}>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1577253313708-cab167d2c474?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <h2>Discover the Power of Centella Asiatica</h2>
          <p>
            Experience the incredible benefits of this versatile herb in skincare, wellness, and overall health. Whether
            you are looking for natural healing, cognitive support, or glowing skin, Centella Asiatica has something to
            offer.
          </p>
          <button className={styles.ctaButton}>Explore More</button>
        </section>
      </div>
    </>
  );
}
