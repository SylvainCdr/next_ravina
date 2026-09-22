import Head from "next/head";
import Image from "next/image";
import styles from "./style.module.scss";
import { motion } from "motion/react";
import Reveal from "@/Components/Reveal/Reveal";

export default function QualitySustainability({ lang = "en" }) {
  const isFr = lang === "fr";
  return (
    <>
      <Head>
        <title>
          {isFr
            ? "Qualité & Durabilité | Gasikara Medicinal Plants Madagascar"
            : "Quality & Sustainability | Gasikara Medicinal Plants Madagascar"}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? "Approvisionnement en Centella asiatica vérifié par HPLC à Madagascar. Gasikara Medicinal Plants — contrôle qualité rigoureux et chaîne d'approvisionnement éthique du terrain à l'export."
              : "HPLC-verified Centella asiatica sourcing from Madagascar. Gasikara Medicinal Plants — rigorous quality control and ethical supply chain from field to export."
          }
        />
        <link
          rel="canonical"
          href={
            isFr
              ? "https://gasikara-plants.com/fr/quality-sustainability"
              : "https://gasikara-plants.com/quality-sustainability"
          }
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://gasikara-plants.com/quality-sustainability"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://gasikara-plants.com/fr/quality-sustainability"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://gasikara-plants.com/quality-sustainability"
        />
        <meta
          property="og:title"
          content={
            isFr
              ? "Qualité & Durabilité | Gasikara Medicinal Plants"
              : "Quality & Sustainability | Gasikara Medicinal Plants"
          }
        />
        <meta
          property="og:description"
          content={
            isFr
              ? "Contrôle qualité rigoureux et chaîne d'approvisionnement éthique, du terrain à l'export."
              : "Rigorous quality control and ethical supply chain, from field to export."
          }
        />
        <meta
          property="og:image"
          content="https://gasikara-plants.com/assets/gmp-logo.jpg"
        />
      </Head>

      <div className={styles.qualityContainer}>
        {/* HERO SECTION */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.heroContent}>
            <h1>
              {isFr
                ? "Au-delà de la Qualité, Créer un Impact"
                : "Beyond Quality, Creating Impact"}
            </h1>
            <p className={styles.heroSubtitle}>
              {isFr
                ? "Là où des normes de qualité rigoureuses rencontrent le développement durable, en renforçant les communautés et en préservant la biodiversité de Madagascar"
                : "Where rigorous quality standards meet sustainable development, empowering communities and preserving Madagascar's biodiversity"}
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span>4,500+</span>
                <p>{isFr ? "Cueilleurs Formés" : "Trained Pickers"}</p>
              </div>
              <div className={styles.heroStat}>
                <span>100%</span>
                <p>{isFr ? "Approvisionnement Vérifié" : "Verified Supply"}</p>
              </div>
              <div className={styles.heroStat}>
                <span>HPLC</span>
                <p>{isFr ? "Vérifié à Chaque Lot" : "Verified Every Batch"}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* QUALITY CERTIFICATIONS SECTION */}
        <Reveal as="section" className={styles.qualitySection}>
          <div className={styles.qualityContent}>
            <div className={styles.sectionHeader}>
              <h2>
                {isFr
                  ? "Normes de Qualité Sans Compromis"
                  : "Uncompromising Quality Standards"}
              </h2>
              <p>
                {isFr
                  ? "Le fondement de notre réputation repose sur un contrôle qualité rigoureux à chaque étape de notre chaîne d'approvisionnement"
                  : "The foundation of our reputation lies in rigorous quality control at every step of our supply chain"}
              </p>
            </div>

            <div className={styles.qualityGrid}>
              <div className={styles.qualityCard}>
                <div className={styles.cardIcon}>🔬</div>
                <h3>{isFr ? "Laboratoire HPLC" : "HPLC Laboratory"}</h3>
                <p>
                  <strong>
                    {isFr
                      ? "Équipement de test HPLC interne"
                      : "In-house HPLC testing equipment"}
                  </strong>{" "}
                  {isFr
                    ? "avec un technicien de laboratoire qualifié et expérimenté pour la vérification asiaticoside/madécassoside et les contrôles microbiologiques."
                    : "with skilled and experienced lab technician for asiaticoside/madecassoside verification and microbiological checks."}
                </p>
                <div className={styles.cardHighlight}>
                  <span>
                    {isFr ? "Analyse Autonome" : "Autonomous Analysis"}
                  </span>
                </div>
              </div>

              <div className={styles.qualityCard}>
                <div className={styles.cardIcon}>📍</div>
                <h3>
                  {isFr
                    ? "Contrôle Qualité Numérique"
                    : "Digital Quality Control"}
                </h3>
                <p>
                  <strong>
                    {isFr
                      ? "Suivi numérique du terrain"
                      : "Digital field tracking"}
                  </strong>{" "}
                  {isFr
                    ? "pour renforcer nos efforts et améliorer la transparence du terrain à l'export."
                    : "to strengthen our efforts and improve transparency from field to export."}
                </p>
                <div className={styles.cardHighlight}>
                  <span>
                    {isFr ? "Du Terrain à l'Export" : "Field to Export"}
                  </span>
                </div>
              </div>

              <div className={styles.qualityCard}>
                <div className={styles.cardIcon}>📦</div>
                <h3>
                  {isFr
                    ? "Constance de Qualité Spécifiée"
                    : "Specification-Grade Consistency"}
                </h3>
                <p>
                  {isFr ? (
                    <>
                      Chaque expédition respecte les spécifications TTT définies
                      — pas seulement une fois, mais{" "}
                      <strong>de manière fiable, lot après lot</strong>.
                      Documentation analytique complète incluse à chaque export.
                    </>
                  ) : (
                    <>
                      Every shipment meets defined TTT specifications — not just
                      once, but <strong>reliably, batch after batch</strong>.
                      Full analytical documentation included with every export.
                    </>
                  )}
                </p>
                <div className={styles.cardHighlight}>
                  <span>
                    {isFr ? "Documentation par Lot" : "Batch Documentation"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SUPPLY CHAIN CONTROL */}
        <Reveal as="section" className={styles.traceabilitySection}>
          <div className={styles.traceabilityContent}>
            <div className={styles.textContent}>
              <h2>
                {isFr
                  ? "Contrôle Total de la Chaîne d'Approvisionnement"
                  : "Complete Supply Chain Control"}
              </h2>
              <p>
                {isFr ? (
                  <>
                    De plus de <strong>4 500 cueilleurs formés</strong> dans les
                    régions de biodiversité de Madagascar jusqu'à l'export
                    international, chaque étape est surveillée pour garantir
                    qualité, sécurité et durabilité.
                  </>
                ) : (
                  <>
                    From <strong>4,500+ trained pickers</strong> across
                    Madagascar's biodiversity regions to international export,
                    every step is monitored to ensure quality, safety, and
                    sustainability.
                  </>
                )}
              </p>

              <div className={styles.supplyStats}>
                <div className={styles.supplyStat}>
                  <span>20</span>
                  <p>
                    {isFr
                      ? "Collecteurs de Poste Avancé"
                      : "Advanced Post Collectors"}
                  </p>
                </div>
                <div className={styles.supplyStat}>
                  <span>4</span>
                  <p>
                    {isFr ? "Superviseurs de Terrain" : "Field Supervisors"}
                  </p>
                </div>
                <div className={styles.supplyStat}>
                  <span>3</span>
                  <p>{isFr ? "Centres de Traitement" : "Processing Centers"}</p>
                </div>
              </div>

              <div className={styles.processSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div>
                    <h4>
                      {isFr ? "Collecte sur le Terrain" : "Field Collection"}
                    </h4>
                    <p>
                      {isFr
                        ? "Cueilleurs formés dans les régions d'Alaotra-Mangoro et d'Atsimo-Atsinanana"
                        : "Trained harvesters in Alaotra-Mangoro and Atsimo-Atsinanana regions"}
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div>
                    <h4>{isFr ? "Contrôle Qualité" : "Quality Control"}</h4>
                    <p>
                      {isFr
                        ? "Contrôle qualité de base et stockage dans les entrepôts régionaux"
                        : "Basic quality control and storage at branch warehouses"}
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div>
                    <h4>
                      {isFr ? "Traitement Avancé" : "Advanced Processing"}
                    </h4>
                    <p>
                      {isFr
                        ? "Tests HPLC, emballage et expédition au siège d'Antananarivo"
                        : "HPLC testing, packaging, and shipping at main office Antananarivo"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.visualContent}>
              <div className={styles.mapContainer}>
                <Image
                  // src="https://images.unsplash.com/photo-1699622595982-42fb5bb9ad22?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  src="/assets/new/image3.jpg"
                  alt="Madagascar map showing operation regions"
                  width={500}
                  height={700}
                  className={styles.mapImage}
                />
                <div className={styles.mapOverlay}>
                  <div className={styles.region}>
                    <h5>Alaotra-Mangoro</h5>
                    <p>{isFr ? "Région Centre-Est" : "Central-East Region"}</p>
                  </div>
                  <div className={styles.region}>
                    <h5>Atsimo-Atsinanana</h5>
                    <p>{isFr ? "Région Sud-Est" : "South-East Region"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* COMMUNITY DEVELOPMENT PROJECTS */}
        <Reveal as="section" className={styles.communitySection}>
          <div className={styles.communityContent}>
            <div className={styles.sectionHeader}>
              <h2>
                {isFr
                  ? "Projets de Développement Communautaire"
                  : "Community Development Projects"}
              </h2>
              <p>
                {isFr
                  ? "Notre responsabilité sociale va au-delà de l'approvisionnement équitable — nous sommes profondément engagés avec les communautés avec lesquelles nous travaillons, créant un impact mesurable"
                  : "Our social responsibility goes beyond fair sourcing - we are deeply engaged with the communities we work with, creating measurable impact"}
              </p>
            </div>

            <div className={styles.impactAreas}>
              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>💼</div>
                <h3>{isFr ? "Vie Locale" : "Local Life"}</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>{isFr ? "En Cours" : "Ongoing"}</span>
                    <p>
                      {isFr
                        ? "Accompagnement des récolteurs avec une formation pratique et des conseils agricoles"
                        : "Supporting harvesters with practical training and agricultural guidance"}
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>{isFr ? "Concret" : "Practical"}</span>
                    <p>
                      {isFr
                        ? "Fourniture d'outils et de semences pour renforcer les revenus ruraux"
                        : "Providing tools and seed support to strengthen rural income sources"}
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.impactArea}>
                <div className={styles.areaIcon}>🌿</div>
                <h3>{isFr ? "Pratiques Durables" : "Sustainable Practices"}</h3>
                <div className={styles.areaStats}>
                  <div className={styles.stat}>
                    <span>{isFr ? "Encadré" : "Guided"}</span>
                    <p>
                      {isFr
                        ? "Soutien à une récolte responsable et à la régénération naturelle"
                        : "Supporting responsible harvesting and natural regeneration"}
                    </p>
                  </div>
                  <div className={styles.stat}>
                    <span>{isFr ? "En Cours" : "Ongoing"}</span>
                    <p>
                      {isFr
                        ? "Participation aux activités locales de conservation et de restauration"
                        : "Engaging in local conservation and restoration activities"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* PARTNERSHIPS */}
        {/* <section className={styles.partnershipsSection}>
          <div className={styles.partnershipsContent}>
            <h2>Strategic Partnerships for Impact</h2>
            <p>
              Collaborating with leading organizations to maximize our positive
              impact
            </p>

            <div className={styles.partnerGrid}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <span className={styles.logoPlaceholder}>
                    <Image
                      src="/assets/government.png"
                      alt="government icon"
                      width={120}
                      height={80}
                    />
                  </span>
                </div>
                <h4>Regional Government</h4>
                <p>
                  Agriculture, Education & Health directorates collaboration
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>
                  <span className={styles.logoPlaceholder}>
                    <Image
                      src="/assets/fjkm.png"
                      alt="government icon"
                      width={120}
                      height={80}
                    />
                  </span>
                </div>
                <h4>NGO SAF FJKM</h4>
                <p>Partnership for drinking water infrastructure projects</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* WHY CHOOSE GASIKARA */}
        <Reveal as="section" className={styles.whySection}>
          <div className={styles.whyContent}>
            <h2>
              {isFr
                ? "Pourquoi Gasikara Medicinal Plants"
                : "Why Gasikara Medicinal Plants"}
            </h2>
            <p>
              {isFr
                ? "Un fournisseur ciblé — un seul produit, une qualité documentée, et une chaîne d'approvisionnement bâtie sur des personnes, pas seulement des processus"
                : "A focused supplier — one product, documented quality, and a supply chain built on people, not just process"}
            </p>

            <div className={styles.advantagesGrid}>
              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🎯</div>
                <h4>
                  {isFr
                    ? "Feuilles Séchées de Haute Qualité"
                    : "High-Quality Dried Leaves"}
                </h4>
                <p>
                  {isFr
                    ? "Plans d'approvisionnement adaptables à tous les besoins, avec une qualité vérifiée par HPLC"
                    : "Adaptable supply plans to suit any requirements with HPLC-verified quality"}
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>👥</div>
                <h4>
                  {isFr
                    ? "Réseau Formé & Expérimenté"
                    : "Trained & Experienced Network"}
                </h4>
                <p>
                  {isFr
                    ? "Un réseau de plus de 4 500 cueilleurs formés garantissant un approvisionnement constant"
                    : "A network of 4,500+ trained pickers ensuring consistent supply"}
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>✅</div>
                <h4>
                  {isFr ? "Approvisionnement Éthique" : "Ethically Sourced"}
                </h4>
                <p>
                  {isFr
                    ? "Pleine conformité avec les normes internationales d'approvisionnement éthique, vérifiée par des revues qualité continues"
                    : "Full compliance with international ethical sourcing standards, verified through ongoing quality reviews"}
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>🏭</div>
                <h4>
                  {isFr ? "Sites Entièrement Équipés" : "Fully Equipped Sites"}
                </h4>
                <p>
                  {isFr
                    ? "Laboratoire HPLC, installations de séchage solaire et centres de traitement"
                    : "HPLC laboratory, solar drying facilities, and processing centers"}
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>⚡</div>
                <h4>
                  {isFr
                    ? "Contrôle Total du Processus"
                    : "Total Process Control"}
                </h4>
                <p>
                  {isFr
                    ? "Contrôle complet de la chaîne d'approvisionnement avec une surveillance numérique tout au long de la chaîne"
                    : "Complete supply chain control with digital monitoring all along the chain"}
                </p>
              </div>

              <div className={styles.advantage}>
                <div className={styles.advantageIcon}>📋</div>
                <h4>
                  {isFr
                    ? "Procédure Administrative Rapide"
                    : "Fast Administrative Track"}
                </h4>
                <p>
                  {isFr
                    ? "Procédures réglementaires simplifiées et documentation d'export"
                    : "Streamlined regulatory procedures and export documentation"}
                </p>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <h3>
                {isFr
                  ? "Prêt à vous approvisionner avec Gasikara ?"
                  : "Ready to Source with Gasikara?"}
              </h3>
              <p>
                {isFr
                  ? "Demandez des échantillons ou discutez de vos spécifications — nous répondons avec des données analytiques complètes et des conditions commerciales transparentes."
                  : "Request samples or discuss your specifications — we respond with full analytical data and transparent commercial terms."}
              </p>
              <div className={styles.ctaButtons}>
                <a
                  href={isFr ? "/fr/contact" : "/contact"}
                  className={styles.primaryButton}
                >
                  {isFr ? "Contactez-nous" : "Contact Us"}
                </a>
                <a
                  href={isFr ? "/fr/centella-asiatica" : "/centella-asiatica"}
                  className={styles.secondaryButton}
                >
                  {isFr ? "Notre Produit" : "Our Product"}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
