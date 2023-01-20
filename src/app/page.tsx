import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "src/styles/css/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main>
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

        <section className={styles.about}>
          <h2>
            <p>
              最短<span>1</span>
              <span>週間</span>で決済可能
            </p>
            <p>スムーズな売却でストレスフリー。</p>
          </h2>
          <div className={styles.discription}>
            <p>
              太陽光発電の買取ならColeadにご相談ください。
              自社で買い取るのでスピーディ。
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
      </main>
    </div>
  );
}
