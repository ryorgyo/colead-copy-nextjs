import Image from "next/image";
import styles from "src/styles/css/Hero.module.css";

export const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Image
          src={"/hero/triangle.png"}
          alt={""}
          fill
          sizes=""
          className={styles.backgroundImg}
        />
        <h2>
          <p>太陽光発電所をすぐに売りたい</p>
          <p>そのようなお悩みを抱えている方はご相談ください。</p>
        </h2>
        <div className={styles.content}>
          <div className={styles.checkList}>
            <div className={styles.checkText}>
              <div className={styles.checkImg}>
                <Image src={"/hero/checkmark.png"} alt={""} fill sizes="" />
              </div>
              <p>資金が必要になりなるべく早く現金化したい。</p>
            </div>
            <div className={styles.checkText}>
              <div className={styles.checkImg}>
                <Image src={"/hero/checkmark.png"} alt={""} fill sizes="" />
              </div>
              <p>
                管理が手間。度重なる制度改正にも
                <br />
                ついていけないので手放したい。
              </p>
            </div>
            <div className={styles.checkText}>
              <div className={styles.checkImg}>
                <Image src={"/hero/checkmark.png"} alt={""} fill sizes="" />
              </div>
              <p>他社に依頼したがなかなか売れない。</p>
            </div>
          </div>
          <div className={styles.personImg}>
            <Image src={"/hero/person.png"} alt={""} fill sizes="" />
          </div>
        </div>
      </section>
    </div>
  );
};
