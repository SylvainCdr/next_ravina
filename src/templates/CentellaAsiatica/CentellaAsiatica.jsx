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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>
          Centella Asiatica Madagascar Supplier | Gasikara Medicinal Plants
        </title>
        <meta
          name="description"
          content="Gasikara Medicinal Plants exports 100% wild-harvested Centella asiatica dried leaves from Madagascar — high Total Triterpene content, HPLC verified, full traceability."
        />
      </Head>

      <div className={styles.centellaContainer}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <h1>Centella Asiatica</h1>
            <p>
              100% wild-harvested from Madagascar's most bioactive regions. High
              Total Triterpene content — verified by HPLC on every batch.
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
                <strong>Tiger Grass</strong>, Centella asiatica is a medicinal
                plant widely used in the pharmaceutical, cosmetic, and
                nutraceutical industries for its exceptional bioactive profile.
                Gasikara Medicinal Plants wild-harvests it exclusively from the{" "}
                <strong>Alaotra-Mangoro</strong> and{" "}
                <strong>Atsimo-Atsinanana</strong> regions of Madagascar — where
                unique soils and climate conditions consistently produce leaves
                with superior triterpene concentrations.
              </p>
              <p>
                We supply <strong>dried leaves</strong> packed in{" "}
                <strong>50 kg polypropylene bales</strong>, export-ready for sea
                freight, with HPLC analysis documentation included with every
                shipment.
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/RM0.jpg"
                  alt="Centella Asiatica plant"
                  width={500}
                  height={350}
                />
              </div>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/Image33.png"
                  alt="Centella leaves"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR PRODUCT */}
        <section className={styles.flagship}>
          <div className={styles.flagshipContent}>
            <div className={styles.flagshipText}>
              <span className={styles.badge}>Our Product</span>
              <h2>Premium Dried Centella Leaves</h2>
              <p className={styles.subtitle}>
                Wild-harvested from Madagascar's most bioactive regions —
                verified by HPLC at every stage
              </p>

              <div className={styles.formats}>
                <div className={styles.format}>
                  <div className={styles.formatIcon}>🌿</div>
                  <div>
                    <h4>Dried Leaves — 50 kg Bales</h4>
                    <p>
                      Pressed and packed in polypropylene bales, export-ready
                      for sea freight. Each batch documented with full lot
                      traceability.
                    </p>
                  </div>
                </div>
                <div className={styles.format}>
                  <div className={styles.formatIcon}>🔬</div>
                  <div>
                    <h4>HPLC-Verified Quality</h4>
                    <p>
                      High Total Triterpene content — asiaticoside and
                      madecassoside — confirmed by in-house laboratory analysis
                      on every batch.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.benefits}>
                <h4>Suited for:</h4>
                <ul>
                  <li>
                    <strong>Pharmaceutical</strong> ingredient sourcing
                  </li>
                  <li>
                    <strong>Cosmetic & personal care</strong> formulations
                  </li>
                  <li>
                    <strong>Botanical extract</strong> manufacturing
                  </li>
                </ul>
              </div>

              <a href="/contact" className={styles.productButton}>
                Request Samples
              </a>
            </div>

            <div className={styles.flagshipVisual}>
              <div className={styles.productShowcase}>
                <Image
                  src="/assets/dried2.jpeg"
                  alt="Centella Asiatica dried leaves"
                  width={800}
                  height={600}
                  className={styles.showcaseImage}
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
              Quality is not a stage in our process — it is the process. Our
              in-house laboratory is equipped with{" "}
              <strong>HPLC testing equipment</strong> to verify Total Triterpene
              content at every critical stage of each collection campaign.
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
          <h2>Ready to Source with Gasikara?</h2>
          <p>
            Request samples or discuss your specifications — we respond with
            full analytical data and transparent commercial terms.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
}
