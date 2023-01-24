import Image from "next/image";
import styles from "src/styles/css/Home.module.css";

export const FirstView = () => {
  return (
    <div>
      <section className={styles.firstView}>
        <Image
          src={"/firstView/background.png"}
          alt={""}
          fill
          sizes=""
          className={styles.backgroundImg}
        />
        <h2 className={styles.slogan}>
          <p>
            最短<span>1</span>
            <span>週間</span>でお振り込みが可能
          </p>
          <p>
            太陽光発電<span>の</span>
            <span>スピード買取</span>
          </p>
        </h2>
        <div className={styles.sloganImg}>
          <div className={`${styles.leftImg} ${styles.img}`}>
            <Image src={"/firstView/left.png"} alt={""} fill sizes="" />
          </div>
          <div className={`${styles.rightImg} ${styles.img}`}>
            <Image src={"/firstView/right.png"} alt={""} fill sizes="" />
          </div>
        </div>
        <div className={`${styles.btnImg} ${styles.img}`}>
          <Image src={"/global/global-btn.png"} alt={""} fill sizes="" />
        </div>
      </section>
    </div>
  );
};
