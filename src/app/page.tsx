import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "src/styles/css/Home.module.css";
import { CvContact } from "./cvContact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const CARDS = [
    {
      h3: "直接買取だから現金化までがスピーディ。手数料も0円",
      p: "弊社は仲介業者ではなく、太陽光発電事業者として自社買取を行います。そのため、発電所の購入完了までの時間が非常に短いことが大きな特徴です。",
    },
    {
      h3: "太陽光投資のプロがワンストップで対応。手続きもスムーズ",
      p: "弊社では開発に関与した太陽光発電所が合計10MWを超える実務実績を保有しております。発電所売買に関するノウハウを基に担当者が即断即決で進めるため、意思決定が速いことが特徴です。初めて発電所を売却される方も丁寧にリードいたします。",
    },
    {
      h3: "低圧から高圧まで即時購入可能な豊富な資金を保有",
      p: "弊社では基本的に現金にて発電所を購入いたします。銀行融資の進捗状況によって購入が遅れるといった事態はございません。",
    },
    {
      h3: "全国の発電所が買取対象。現地調査も対応",
      p: "抑制エリアでも喜んで購入いたします。また、他の査定会社に購入を断られた発電所でも購入の可能性はあります。本当に売却できるか悩ましい発電所であっても、是非一度お声がけください。",
    },
  ];

  const FLOWCARDS = [
    {
      h3: "簡易査定",
      p: "まずは簡易査定。30秒で概算の査定額が分かります。",
    },
    {
      h3: "お問い合わせ",
      p: "価格の目線が合う方はお問い合わせください。追加の資料を頂くことでより精緻な金額を査定させていただきます。過去の売電金額によっては初期査定額よりも価格が上がることも。",
    },
    {
      h3: "現地調査",
      p: "最短日程にて現地調査。担当者が現地訪問し、発電所の状況を確認+売主及び地主とご面談させていただきます。",
    },
    {
      h3: "売買金額のご提示",
      p: "合意次第、契約書の確認＆締結。その後、ID・電力会社契約・土地所有権/地上権の名義変更に必要な書類をやり取りします。",
    },
    {
      h3: "決済",
      p: "司法書士による土地に関する登記申請時に決済いたします。",
    },
  ];

  const QUESTIONS = [
    {
      q: "査定は費用がかかりますか？",
      a: "査定は無料です。お気軽にご相談ください。",
    },
    {
      q: "発電所の土地が賃貸でも売却可能でしょうか？",
      a: "土地の契約形態が地上権設定契約であれば買取可能です。",
    },
    {
      q: "保守管理やメンテナンス、フェンスの設置等の改正FIT法を遵守していない発電所も売却可能でしょうか？",
      a: "価格の調整が入る可能性がありますが、買取可能です。",
    },
    {
      q: "メンテナンス業者が決められいる場合においても売却可能でしょうか？",
      a: "価格の調整が入る可能性がありますが、買取可能です。",
    },
  ];

  const FORMITEMS = [
    {
      title: "直近1年の売電金額（税込）",
      name: "sale",
      essential: true,
      unit: true,
    },
    {
      title: "土地賃料",
      name: "rent",
      essential: true,
      unit: true,
    },
    {
      title: "稼働開始年月",
      name: "period",
      essential: true,
      unit: true,
    },
  ];
  return (
    <div>
      <main className={styles.main}>
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

        <CvContact />

        <section className={styles.reason}>
          <h2>
            選ばれる<span>4</span>つの理由
          </h2>
          <div className={styles.cardList}>
            {CARDS.map((card, index) => {
              const num = index + 1;
              return (
                <div className={styles.card} key={num}>
                  <p className={styles.number}>0{num}</p>
                  <div className={styles.reasonImg}>
                    <Image
                      src={`/reason/step${num}.png`}
                      alt={""}
                      fill
                      sizes=""
                      className={styles.img}
                    />
                  </div>
                  <h3>{card.h3}</h3>
                  <p className={styles.dis}>{card.p}</p>
                </div>
              );
            })}
          </div>
        </section>

        <CvContact />

        <section className={styles.flow}>
          <h2>買取までの流れ</h2>
          <div className={styles.cardList}>
            {FLOWCARDS.map((card, index) => {
              const num = index + 1;
              return (
                <div className={styles.flowCard} key={num}>
                  <div className={styles.step}>
                    <p>STEP</p>
                    <p>0{num}</p>
                  </div>
                  <div className={styles.img}>
                    <Image
                      src={`/flow/step${num}.png`}
                      alt={""}
                      fill
                      sizes=""
                      className={styles.flowImg}
                    />
                  </div>
                  <h3>{card.h3}</h3>
                  <p>{card.p}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.qa}>
          <h2>よくあるご質問</h2>
          <div className={styles.contentBox}>
            {QUESTIONS.map((ques) => {
              return (
                <div className={styles.one} key={ques.q}>
                  <div className={styles.question}>
                    <p>Q</p>
                    <p>{ques.q}</p>
                  </div>
                  <div className={styles.answer}>
                    <p>A</p>
                    <p>{ques.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CvContact />

        <section className={styles.contact}>
          <div className={styles.slogan}>
            <p>
              <span>30</span>秒で結果が分かる！
            </p>
            <h2>無料金額シミュレーション</h2>
          </div>
          <div className={styles.contactBox}>
            <h3>お持ちの発電所の情報を教えてください。</h3>
            {FORMITEMS.map((item) => {
              return (
                <div className={styles.formBox} key={item.title}>
                  <div className={styles.left}>
                    <p className={styles.title}>{item.title}</p>
                    {item.essential ? (
                      <p className={styles.essential}>必須</p>
                    ) : null}
                  </div>
                  <div className={styles.right}>
                    <input type="number" name={item.name} id={item.name} />
                    {item.essential ? <p>万円</p> : null}
                  </div>
                </div>
              );
            })}
            <div className={styles.btn}>
              <Image
                src={`/contact/start-btn.png`}
                alt={""}
                fill
                sizes=""
                className={styles.flowImg}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
