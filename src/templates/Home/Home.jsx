import styles from "./style.module.scss";
import Image from "next/image";
import CustomersSlider from "@/components/customersSlider/customersSlider";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <Image src="/assets/ravina.png" alt="" width={160} height={160} />
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing{" "}
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            assumenda vero recusandae iure delectus officia expedita doloribus
            illo.
          </p>
          <button className={styles.ctaButton}>Learn more</button>
        </div>
      </div>

      <div className={styles.section1}>
        <div
          className={styles.section1Content}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <h2>Medicine</h2>
        </div>
        <div
          className={styles.section1Content}
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          {" "}
          <h2> Wellness & Healthcare</h2>
        </div>
        <div
          className={styles.section1Content}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8fDI%3D)",
          }}
        >
          {" "}
          <h2>Cosmetics</h2>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.section2Left}>
          <h1> Lorem ipsum, dolor sit amet consectetur</h1>
          <h2>
            {" "}
            Amet repellendus quasi non quisquam iure ipsum dolor sit amet
            consectex,.
          </h2>
          <h2>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem animi cupiditate deserunt beatae perspigiat recus.
          </h2>
        </div>
        <div className={styles.section2Right}></div>
      </div>
      <div className={styles.section4}>
        <h1> Dolorum omnis ad aspernatur </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur sed possimus adipisicing elit.
          Quisquam, voluptatem.
        </h2>
      </div>
      <div className={styles.section3}>
        <div className={styles.section3Left}></div>
        <div className={styles.section3Right}>
          <h1> Lorem ipsum, dolor sit amet consectetur</h1>
          <h2>
            {" "}
            Amet repellendus quasi non quisquam iure ipsum dolor sit amet
            consectex,.
          </h2>
          <h2>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem animi cupiditate deserunt beatae perspigiat recus.
          </h2>
        </div>
      </div>
          <CustomersSlider />
    </div>
  );
}
