import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";

export default function CentellaAsiatica() {
  const [discovered, setDiscovered] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const hotspots = [
    {
      id: 1,
      top: "30%",
      left: "45%",
      icon: "🌿",
      title: "Leaves",
      description:
        "Fan-shaped, kidney-like leaves rich in <strong>asiaticoside</strong> and <strong>madecassoside</strong>. These are the primary harvested part for medicinal use.",
      legendText: "Medicinal Leaves",
    },
    {
      id: 2,
      top: "70%",
      left: "30%",
      icon: "🌱",
      title: "Stolons",
      description:
        "Creeping stems that allow the plant to spread horizontally. They root at nodes, creating new plants and ensuring sustainable regrowth after harvest.",
      legendText: "Regenerative Stolons",
    },
    {
      id: 3,
      top: "85%",
      left: "60%",
      icon: "🌍",
      title: "Root System",
      description:
        "Shallow but extensive root network that thrives in Madagascar's moist, mineral-rich soils. Roots also contain beneficial triterpenes.",
      legendText: "Root Network",
    },
    {
      id: 4,
      top: "35%",
      left: "75%",
      icon: "🌸",
      title: "Flowers",
      description:
        "Tiny pink or white flowers in clusters. While small, they indicate plant maturity — the optimal time for harvesting active compounds.",
      legendText: "Indicator Flowers",
    },
    {
      id: 5,
      top: "35%",
      left: "20%",
      icon: "🏝️",
      title: "Habitat",
      description:
        "Thrives in Madagascar's <strong>Alaotra-Mangoro</strong> and <strong>Atsimo-Atsinanana</strong> regions — wetlands and forest edges with rich biodiversity.",
      legendText: "Natural Habitat",
    },
  ];

  const handleDiscover = (id) => {
    setDiscovered((prev) => new Set([...prev, id]));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Centella Asiatica | RAVINA Medicinals Madagascar</title>
        <meta
          name="description"
          content="RAVINA Medicinals ethically sources and exports premium Centella Asiatica from Madagascar — ensuring purity, traceability, and sustainability."
        />
      </Head>

      <div className={styles.centellaContainer}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <h1>Centella Asiatica</h1>
            <p>
              Our flagship product — ethically sourced from Madagascar’s rich
              ecosystems and trusted worldwide for its purity and effectiveness.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className={styles.introduction}>
          <div className={styles.introductionContent}>
            <div className={styles.text}>
              <h2>About the Plant</h2>
              <p>
                Also known as <strong>Gotu Kola</strong> or{" "}
                <strong>Tiger Grass</strong>, Centella Asiatica is a remarkable
                medicinal herb widely used in the pharmaceutical, cosmetic, and
                wellness industries. RAVINA Medicinals sources wild Centella
                Asiatica ethically from the <strong>Alaotra-Mangoro</strong> and{" "}
                <strong>Atsimo-Atsinanana</strong> regions of Madagascar — areas
                renowned for their natural biodiversity.
              </p>
              <p>
                Our Centella is available in <strong>dried leaves</strong> and{" "}
                <strong>powder form</strong>, harvested and processed following
                strict UEBT standards to ensure consistent quality and
                sustainability.
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/image33.png"
                  alt="Centella Asiatica plant"
                  width={500}
                  height={350}
                />
              </div>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/image44.png"
                  alt="Centella leaves"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.applications}>
          <h2>Key Applications</h2>
          <div className={styles.appGrid}>
            <div>
              <h3>💧 Skincare & Cosmetics</h3>
              <p>
                Used in creams, serums, and masks for its soothing, anti-aging,
                and wound-healing properties.
              </p>
            </div>
            <div>
              <h3>💊 Pharmaceuticals</h3>
              <p>
                Centella extract supports circulation, cognitive function, and
                scar recovery in therapeutic formulations.
              </p>
            </div>
            <div>
              <h3>🌿 Nutraceuticals</h3>
              <p>
                Incorporated into dietary supplements promoting memory, stress
                relief, and overall well-being.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.composition}>
          <h2>Key Active Molecules</h2>
          <ul>
            <li>Asiaticoside</li>
            <li>Madecassoside</li>
            <li>Asiatic Acid</li>
            <li>Madecassic Acid</li>
          </ul>
          <p>
            These bioactive compounds are responsible for Centella’s
            regenerative, antioxidant, and anti-inflammatory effects.
          </p>
        </section>

        {/* INTERACTIVE PLANT ANATOMY */}
        <section className={styles.plantAnatomy} ref={sectionRef}>
          <div className={styles.anatomyHeader}>
            <h2>Discover the Plant</h2>
            <div className={styles.discoveryCounter}>
              <div className={styles.counterProgress}>
                <div
                  className={styles.counterFill}
                  style={{
                    width: `${(discovered.size / hotspots.length) * 100}%`,
                  }}
                ></div>
              </div>
              <span className={styles.counterText}>
                {discovered.size}/{hotspots.length} discovered
                {discovered.size === hotspots.length && (
                  <span className={styles.completeBadge}>✨ Complete!</span>
                )}
              </span>
            </div>
          </div>

          <p className={styles.anatomyIntro}>
            Explore the remarkable Centella Asiatica in its natural Madagascar
            habitat. Hover over the markers to learn about each part of this
            extraordinary medicinal plant.
          </p>

          <div className={styles.anatomyContainer}>
            <div className={styles.plantImage}>
              <img
                src="/assets/centella-interactive.jpeg"
                alt="Centella Asiatica in Madagascar"
              />

              {/* Hover indicator */}
              {discovered.size === 0 && (
                <div className={styles.hoverHint}>
                  <span className={styles.hintIcon}>👆</span>
                  <span>Hover to explore</span>
                </div>
              )}

              {/* Dynamic Hotspots */}
              {hotspots.map((spot, index) => (
                <div
                  key={spot.id}
                  className={`${styles.hotspot} ${
                    isVisible ? styles.hotspotVisible : ""
                  } ${discovered.has(spot.id) ? styles.hotspotDiscovered : ""}`}
                  style={{
                    top: spot.top,
                    left: spot.left,
                    animationDelay: `${index * 0.15}s`,
                  }}
                  onMouseEnter={() => handleDiscover(spot.id)}
                >
                  <div className={styles.hotspotPulse}></div>
                  <div className={styles.hotspotDot}>
                    {discovered.has(spot.id) && (
                      <span className={styles.checkMark}>✓</span>
                    )}
                  </div>
                  <div className={styles.hotspotCard}>
                    <h4>
                      {spot.icon} {spot.title}
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{ __html: spot.description }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.anatomyLegend}>
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  className={`${styles.legendItem} ${
                    discovered.has(spot.id) ? styles.legendDiscovered : ""
                  }`}
                >
                  <span className={styles.legendIcon}>{spot.icon}</span>
                  <span>{spot.legendText}</span>
                  {discovered.has(spot.id) && (
                    <span className={styles.legendCheck}>✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPLY CHAIN */}
        <section className={styles.valueChain}>
          <h2>Our Centella Supply Chain</h2>
          <p>
            From field collection to export, our integrated value chain ensures
            full traceability and top quality. Each step is managed under strict
            procedures, with over <strong>4,500 trained pickers</strong> and a
            network of dedicated supervisors and collectors.
          </p>

          <div className={styles.chainSteps}>
            <div>🌿 Field Collection</div>
            <div>🏭 Processing & Drying</div>
            <div>🔬 Quality Control (HPLC)</div>
            <div>📦 Packaging & Storage</div>
            <div>🌍 Export & Client Delivery</div>
          </div>

          <p className={styles.bottomNote}>
            Activities are monitored through <strong>FarmForce</strong>{" "}
            traceability software and assessed via regular{" "}
            <strong>UEBT audits</strong>, ensuring ethical sourcing and
            transparency from picker to port.
          </p>
        </section>

        {/* QUALITY & TRACEABILITY */}
        <section className={styles.quality}>
          <div className={styles.qualityText}>
            <h2>Quality & Traceability</h2>
            <p>
              RAVINA Medicinals’ reputation is built on excellence. Our in-house
              laboratory is equipped with{" "}
              <strong>HPLC testing equipment</strong> to analyze the quality of
              Centella Asiatica throughout each collection campaign.
            </p>
            <p>
              With <strong>three annual audits</strong> under UEBT supervision,
              we maintain rigorous standards for ethical sourcing, biodiversity
              protection, and community well-being.
            </p>
          </div>
        </section>

        <section className={styles.sustainability}>
          <h2>Sustainability & Impact</h2>
          <p>
            Every kilogram of Centella exported supports sustainable harvesting
            and the livelihoods of over <strong>4,500 local pickers</strong>.
            Through education, nutrition, and biodiversity programs, we ensure
            positive environmental and social impact across Madagascar.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <h2>Partner with RAVINA Medicinals</h2>
          <p>
            Choose Madagascar’s trusted source for ethical and sustainable
            Centella Asiatica. Contact our team to request samples or discuss
            your sourcing needs.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
}
