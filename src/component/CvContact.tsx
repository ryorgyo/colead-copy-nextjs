import Image from "next/image";
import styles from "src/styles/css/CvContact.module.css";
import { GlobalBtn } from "src/component/GlobalBtn";

export const CvContact = () => {
  return (
    <div>
      <section className={styles.cvContact}>
        <Image
          src={"/global/background.png"}
          alt={""}
          fill
          sizes=""
          className={styles.backImg}
        />
        <div className={styles.text}>
          <p>相談だけでもOK！</p>
          <p>太陽光発電所のスピード買取なら</p>
        </div>
        <h2>
          <Image src={"/global/global-logo.png"} alt={""} fill sizes="" />
        </h2>
        <GlobalBtn />
      </section>
    </div>
  );
};
