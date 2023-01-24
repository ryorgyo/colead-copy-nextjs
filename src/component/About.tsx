import Image from "next/image";
import styles from "src/styles/css/Home.module.css";

export const About = () => {
  return (
    <div>
      <section className={styles.about}>
        <div className={styles.absolute}>
          <div className={styles.backColead}>
            <Image src={"/hero/backColead.png"} alt={""} fill sizes="" />
          </div>
        </div>
        <h2>
          <p>
            最短<span>1</span>
            <span>週間</span>で決済可能
          </p>
          <p>スムーズな売却でストレスフリー。</p>
        </h2>
        <div className={styles.discription}>
          <p>
            太陽光発電の買取なら
            <ruby>
              Colead<rt>コリード</rt>
            </ruby>
            にご相談ください。
            <span className={styles.br}></span>
            自社で買い取るのでスピーディ。<span className={styles.br}></span>
            太陽光発電事業に精通したプロフェッショナルがワンストップで対応するので手続きもスムーズです。
          </p>
        </div>
        <div className={styles.companyImg}>
          <div className={styles.author}>
            <Image src={"/hero/author.png"} alt={""} fill sizes="" />
          </div>
          <div className={styles.own}>
            <Image src={"/hero/own.png"} alt={""} fill sizes="" />
          </div>
        </div>
      </section>
    </div>
  );
};
