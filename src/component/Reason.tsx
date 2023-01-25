import Image from "next/image";
import styles from "src/styles/css/Reason.module.css";

export const Reason = () => {
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
  return (
    <div>
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
    </div>
  );
};
