import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { motion } from "motion/react";
import Reveal from "@/Components/Reveal/Reveal";

export default function CentellaAsiatica({ lang = "en" }) {
  const isFr = lang === "fr";
  const [discovered, setDiscovered] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const hotspots = isFr
    ? [
        {
          id: 1,
          top: "30%",
          left: "45%",
          icon: "🌿",
          title: "Feuilles",
          description:
            "Feuilles en forme d'éventail, semblables à un rein, riches en <strong>asiaticoside</strong> et <strong>madecassoside</strong>. C'est la partie principalement récoltée à usage médicinal.",
          legendText: "Feuilles Médicinales",
        },
        {
          id: 2,
          top: "70%",
          left: "30%",
          icon: "🌱",
          title: "Stolons",
          description:
            "Tiges rampantes permettant à la plante de se propager horizontalement. Elles s'enracinent aux nœuds, créant de nouvelles plantes et assurant une repousse durable après la récolte.",
          legendText: "Stolons Régénératifs",
        },
        {
          id: 3,
          top: "85%",
          left: "60%",
          icon: "🌍",
          title: "Système Racinaire",
          description:
            "Réseau racinaire peu profond mais étendu qui prospère dans les sols humides et riches en minéraux de Madagascar. Les racines contiennent également des triterpènes bénéfiques.",
          legendText: "Réseau Racinaire",
        },
        {
          id: 4,
          top: "35%",
          left: "75%",
          icon: "🌸",
          title: "Fleurs",
          description:
            "Petites fleurs roses ou blanches en grappes. Bien que discrètes, elles indiquent la maturité de la plante — le moment optimal pour récolter les composés actifs.",
          legendText: "Fleurs Indicatrices",
        },
        {
          id: 5,
          top: "35%",
          left: "20%",
          icon: "🏝️",
          title: "Habitat",
          description:
            "Prospère dans les régions d'<strong>Alaotra-Mangoro</strong> et d'<strong>Atsimo-Atsinanana</strong> à Madagascar — des zones humides et lisières forestières à la biodiversité riche.",
          legendText: "Habitat Naturel",
        },
      ]
    : [
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
          {isFr
            ? "Fournisseur de Centella Asiatica Madagascar | Gasikara Medicinal Plants"
            : "Centella Asiatica Madagascar Supplier | Gasikara Medicinal Plants"}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? "Gasikara Medicinal Plants exporte des feuilles séchées de Centella asiatica 100% sauvages de Madagascar — forte teneur en triterpènes totaux, vérifiée par HPLC."
              : "Gasikara Medicinal Plants exports 100% wild-harvested Centella asiatica dried leaves from Madagascar — high Total Triterpene content, HPLC verified."
          }
        />
        <link
          rel="canonical"
          href={
            isFr
              ? "https://gasikara-plants.com/fr/centella-asiatica"
              : "https://gasikara-plants.com/centella-asiatica"
          }
        />
        <link rel="alternate" hrefLang="en" href="https://gasikara-plants.com/centella-asiatica" />
        <link rel="alternate" hrefLang="fr" href="https://gasikara-plants.com/fr/centella-asiatica" />
        <link rel="alternate" hrefLang="x-default" href="https://gasikara-plants.com/centella-asiatica" />
        <meta property="og:title" content={isFr ? "Centella Asiatica \u2014 Feuilles S\u00e9ch\u00e9es Premium" : "Centella Asiatica \u2014 Premium Dried Leaves"} />
        <meta
          property="og:description"
          content={
            isFr
              ? "100% sauvage, forte teneur en triterp\u00e8nes totaux, v\u00e9rifi\u00e9e par HPLC sur chaque lot."
              : "100% wild-harvested, high Total Triterpene content, HPLC verified on every batch."
          }
        />
        <meta property="og:image" content="https://gasikara-plants.com/assets/new/cent102.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Centella Asiatica — Dried Leaves",
              description: isFr
                ? "Feuilles s\u00e9ch\u00e9es de Centella asiatica 100% sauvages de Madagascar, v\u00e9rifi\u00e9es par HPLC."
                : "100% wild-harvested dried Centella asiatica leaves from Madagascar, HPLC verified.",
              image: "https://gasikara-plants.com/assets/new/cent102.jpeg",
              brand: { "@type": "Brand", name: "Gasikara Medicinal Plants" },
              countryOfOrigin: "Madagascar",
            }),
          }}
        />
      </Head>

      <div className={styles.centellaContainer}>
        {/* HERO */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <h1>Centella Asiatica</h1>
            <p>
              {isFr
                ? "100% sauvage récoltée dans les régions les plus bioactives de Madagascar. Forte teneur en triterpènes totaux — vérifiée par HPLC sur chaque lot."
                : "100% wild-harvested from Madagascar's most bioactive regions. High Total Triterpene content — verified by HPLC on every batch."}
            </p>
          </div>
        </motion.section>

        {/* INTRODUCTION */}
        <Reveal as="section" className={styles.introduction}>
          <div className={styles.introductionContent}>
            <div className={styles.text}>
              <h2>{isFr ? "À Propos de la Plante" : "About the Plant"}</h2>
              <p>
                {isFr ? (
                  <>
                    Également connue sous le nom de <strong>Gotu Kola</strong> ou{" "}
                    <strong>Herbe du Tigre</strong>, la Centella asiatica est une
                    plante médicinale largement utilisée dans les industries
                    pharmaceutique, cosmétique et nutraceutique pour son profil
                    bioactif exceptionnel. Gasikara Medicinal Plants la récolte
                    exclusivement à l'état sauvage dans les régions{" "}
                    <strong>d'Alaotra-Mangoro</strong> et{" "}
                    <strong>d'Atsimo-Atsinanana</strong> de Madagascar — où des
                    sols et un climat uniques produisent constamment des feuilles
                    aux concentrations supérieures en triterpènes.
                  </>
                ) : (
                  <>
                    Also known as <strong>Gotu Kola</strong> or{" "}
                    <strong>Tiger Grass</strong>, Centella asiatica is a medicinal
                    plant widely used in the pharmaceutical, cosmetic, and
                    nutraceutical industries for its exceptional bioactive profile.
                    Gasikara Medicinal Plants wild-harvests it exclusively from the{" "}
                    <strong>Alaotra-Mangoro</strong> and{" "}
                    <strong>Atsimo-Atsinanana</strong> regions of Madagascar — where
                    unique soils and climate conditions consistently produce leaves
                    with superior triterpene concentrations.
                  </>
                )}
              </p>
              <p>
                {isFr ? (
                  <>
                    Nous fournissons des <strong>feuilles séchées</strong> conditionnées
                    en <strong>balles de polypropylène de 50 kg</strong>, prêtes à
                    l'export par fret maritime, avec une documentation d'analyse HPLC
                    incluse à chaque expédition.
                  </>
                ) : (
                  <>
                    We supply <strong>dried leaves</strong> packed in{" "}
                    <strong>50 kg polypropylene bales</strong>, export-ready for sea
                    freight, with HPLC analysis documentation included with every
                    shipment.
                  </>
                )}
              </p>
            </div>
            <div className={styles.imageGrid}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/rm0.JPG"
                  alt="Centella Asiatica plant"
                  width={500}
                  height={350}
                />
              </div>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/assets/image33.png"
                  alt="Centella leaves"
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* OUR PRODUCT */}
        <Reveal as="section" className={styles.flagship}>
          <div className={styles.flagshipContent}>
            <div className={styles.flagshipText}>
              <span className={styles.badge}>{isFr ? "Notre Produit" : "Our Product"}</span>
              <h2>{isFr ? "Feuilles de Centella Séchées Premium" : "Premium Dried Centella Leaves"}</h2>
              <p className={styles.subtitle}>
                {isFr
                  ? "Récoltées à l'état sauvage dans les régions les plus bioactives de Madagascar — vérifiées par HPLC à chaque étape"
                  : "Wild-harvested from Madagascar's most bioactive regions — verified by HPLC at every stage"}
              </p>

              <div className={styles.formats}>
                <div className={styles.format}>
                  <div className={styles.formatIcon}>🌿</div>
                  <div>
                    <h4>{isFr ? "Feuilles Séchées — Balles de 50 kg" : "Dried Leaves — 50 kg Bales"}</h4>
                    <p>
                      {isFr
                        ? "Pressées et emballées en balles de polypropylène, prêtes à l'export par fret maritime. Chaque lot est documenté avec des registres détaillés."
                        : "Pressed and packed in polypropylene bales, export-ready for sea freight. Each batch documented with detailed lot records."}
                    </p>
                  </div>
                </div>
                <div className={styles.format}>
                  <div className={styles.formatIcon}>🔬</div>
                  <div>
                    <h4>{isFr ? "Qualité Vérifiée HPLC" : "HPLC-Verified Quality"}</h4>
                    <p>
                      {isFr
                        ? "Forte teneur en triterpènes totaux — asiaticoside et madecassoside — confirmée par analyse en laboratoire interne sur chaque lot."
                        : "High Total Triterpene content — asiaticoside and madecassoside — confirmed by in-house laboratory analysis on every batch."}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.benefits}>
                <h4>{isFr ? "Adapté pour :" : "Suited for:"}</h4>
                <ul>
                  <li>
                    <strong>{isFr ? "Pharmaceutique" : "Pharmaceutical"}</strong> {isFr ? " — approvisionnement en ingrédients" : "ingredient sourcing"}
                  </li>
                  <li>
                    <strong>{isFr ? "Cosmétique et soins personnels" : "Cosmetic & personal care"}</strong> {isFr ? " — formulations" : "formulations"}
                  </li>
                  <li>
                    <strong>{isFr ? "Extraits botaniques" : "Botanical extract"}</strong> {isFr ? " — fabrication" : "manufacturing"}
                  </li>
                </ul>
              </div>

              <a href={isFr ? "/fr/contact" : "/contact"} className={styles.productButton}>
                {isFr ? "Demander des Échantillons" : "Request Samples"}
              </a>
            </div>

            <div className={styles.flagshipVisual}>
              <div className={styles.productShowcase}>
                <Image
                  src="/assets/new/cent102.jpeg"
                  alt="Centella Asiatica dried leaves"
                  width={800}
                  height={600}
                  className={styles.showcaseImage}
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className={styles.applications}>
          <h2>{isFr ? "Applications Clés" : "Key Applications"}</h2>
          <div className={styles.appGrid}>
            <div>
              <h3>{isFr ? "💧 Soins de la Peau & Cosmétiques" : "💧 Skincare & Cosmetics"}</h3>
              <p>
                {isFr
                  ? "Utilisée dans les crèmes, sérums et masques pour ses propriétés apaisantes, anti-âge et cicatrisantes."
                  : "Used in creams, serums, and masks for its soothing, anti-aging, and wound-healing properties."}
              </p>
            </div>
            <div>
              <h3>{isFr ? "💊 Pharmaceutique" : "💊 Pharmaceuticals"}</h3>
              <p>
                {isFr
                  ? "L'extrait de Centella favorise la circulation, les fonctions cognitives et la récupération des cicatrices dans les formulations thérapeutiques."
                  : "Centella extract supports circulation, cognitive function, and scar recovery in therapeutic formulations."}
              </p>
            </div>
            <div>
              <h3>{isFr ? "🌿 Nutraceutiques" : "🌿 Nutraceuticals"}</h3>
              <p>
                {isFr
                  ? "Intégrée dans des compléments alimentaires favorisant la mémoire, la gestion du stress et le bien-être général."
                  : "Incorporated into dietary supplements promoting memory, stress relief, and overall well-being."}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className={styles.composition}>
          <h2>{isFr ? "Molécules Actives Clés" : "Key Active Molecules"}</h2>
          <ul>
            <li>Asiaticoside</li>
            <li>Madecassoside</li>
            <li>{isFr ? "Acide Asiatique" : "Asiatic Acid"}</li>
            <li>{isFr ? "Acide Madécassique" : "Madecassic Acid"}</li>
          </ul>
          <p>
            {isFr
              ? "Ces composés bioactifs sont responsables des effets régénérants, antioxydants et anti-inflammatoires de la Centella."
              : "These bioactive compounds are responsible for Centella’s regenerative, antioxidant, and anti-inflammatory effects."}
          </p>
        </Reveal>

        {/* INTERACTIVE PLANT ANATOMY */}
        <section className={styles.plantAnatomy} ref={sectionRef}>
          <div className={styles.anatomyHeader}>
            <h2>{isFr ? "Découvrez la Plante" : "Discover the Plant"}</h2>
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
                {discovered.size}/{hotspots.length} {isFr ? "découvert(e)s" : "discovered"}
                {discovered.size === hotspots.length && (
                  <span className={styles.completeBadge}>{isFr ? "✨ Terminé !" : "✨ Complete!"}</span>
                )}
              </span>
            </div>
          </div>

          <p className={styles.anatomyIntro}>
            {isFr
              ? "Explorez la remarquable Centella Asiatica dans son habitat naturel à Madagascar. Survolez les marqueurs pour découvrir chaque partie de cette plante médicinale extraordinaire."
              : "Explore the remarkable Centella Asiatica in its natural Madagascar habitat. Hover over the markers to learn about each part of this extraordinary medicinal plant."}
          </p>

          <div className={styles.anatomyContainer}>
            <div className={styles.plantImage}>
              <img
                src="/assets/new/cent103.jpeg"
                alt="Centella Asiatica in Madagascar"
              />

              {/* Hover indicator */}
              {discovered.size === 0 && (
                <div className={styles.hoverHint}>
                  <span className={styles.hintIcon}>👆</span>
                  <span>{isFr ? "Survolez pour explorer" : "Hover to explore"}</span>
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
        <Reveal as="section" className={styles.valueChain}>
          <h2>{isFr ? "Notre Chaîne d'Approvisionnement Centella" : "Our Centella Supply Chain"}</h2>
          <p>
            {isFr ? (
              <>
                De la collecte sur le terrain à l'export, notre chaîne de valeur
                intégrée garantit une qualité supérieure. Chaque étape est gérée
                selon des procédures strictes, avec plus de{" "}
                <strong>4 500 cueilleurs formés</strong> et un réseau de
                superviseurs et collecteurs dédiés.
              </>
            ) : (
              <>
                From field collection to export, our integrated value chain ensures
                top quality. Each step is managed under strict procedures, with over
                <strong>4,500 trained pickers</strong> and a network of dedicated
                supervisors and collectors.
              </>
            )}
          </p>

          <div className={styles.chainSteps}>
            <div>{isFr ? "🌿 Collecte sur le Terrain" : "🌿 Field Collection"}</div>
            <div>{isFr ? "🏭 Traitement & Séchage" : "🏭 Processing & Drying"}</div>
            <div>{isFr ? "🔬 Contrôle Qualité (HPLC)" : "🔬 Quality Control (HPLC)"}</div>
            <div>{isFr ? "📦 Emballage & Stockage" : "📦 Packaging & Storage"}</div>
            <div>{isFr ? "🌍 Export & Livraison Client" : "🌍 Export & Client Delivery"}</div>
          </div>

          <p className={styles.bottomNote}>
            {isFr ? (
              <>
                Les activités sont surveillées via les systèmes{" "}
                <strong>FarmForce</strong> et des revues qualité régulières,
                garantissant un approvisionnement éthique et transparent du
                cueilleur au port.
              </>
            ) : (
              <>
                Activities are monitored through <strong>FarmForce</strong> systems
                and regular quality reviews, ensuring ethical sourcing and
                transparency from picker to port.
              </>
            )}
          </p>
        </Reveal>

        {/* QUALITY */}
        <Reveal as="section" className={styles.quality}>
          <div className={styles.qualityText}>
            <h2>{isFr ? "Qualité & Assurance" : "Quality & Assurance"}</h2>
            <p>
              {isFr ? (
                <>
                  La qualité n'est pas une étape de notre processus — c'est le
                  processus. Notre laboratoire interne est équipé d'
                  <strong>appareils de test HPLC</strong> pour vérifier la teneur
                  en triterpènes totaux à chaque étape critique de chaque campagne
                  de collecte.
                </>
              ) : (
                <>
                  Quality is not a stage in our process — it is the process. Our
                  in-house laboratory is equipped with{" "}
                  <strong>HPLC testing equipment</strong> to verify Total Triterpene
                  content at every critical stage of each collection campaign.
                </>
              )}
            </p>
            <p>
              {isFr
                ? "Des évaluations qualité régulières nous aident à maintenir des normes rigoureuses pour un approvisionnement éthique, la protection de la biodiversité et le bien-être des communautés."
                : "Regular quality assessments help us maintain rigorous standards for ethical sourcing, biodiversity protection, and community well-being."}
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className={styles.sustainability}>
          <h2>{isFr ? "Durabilité & Impact" : "Sustainability & Impact"}</h2>
          <p>
            {isFr ? (
              <>
                Chaque kilogramme de Centella exporté soutient une récolte durable
                et les moyens de subsistance de plus de{" "}
                <strong>4 500 cueilleurs locaux</strong>. Grâce à des programmes
                d'éducation, de nutrition et de biodiversité, nous garantissons un
                impact environnemental et social positif à travers Madagascar.
              </>
            ) : (
              <>
                Every kilogram of Centella exported supports sustainable harvesting
                and the livelihoods of over <strong>4,500 local pickers</strong>.
                Through education, nutrition, and biodiversity programs, we ensure
                positive environmental and social impact across Madagascar.
              </>
            )}
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal as="section" className={styles.ctaSection}>
          <h2>{isFr ? "Prêt à vous approvisionner avec Gasikara ?" : "Ready to Source with Gasikara?"}</h2>
          <p>
            {isFr
              ? "Demandez des échantillons ou discutez de vos spécifications — nous répondons avec des données analytiques complètes et des conditions commerciales transparentes."
              : "Request samples or discuss your specifications — we respond with full analytical data and transparent commercial terms."}
          </p>
          <a href={isFr ? "/fr/contact" : "/contact"} className={styles.ctaButton}>
            {isFr ? "Contactez-nous" : "Contact Us"}
          </a>
        </Reveal>
      </div>
    </>
  );
}
