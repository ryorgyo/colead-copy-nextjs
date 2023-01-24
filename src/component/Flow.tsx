import Image from "next/image";
import styles from "src/styles/css/Home.module.css";

export const Flow = () => {
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
  return (
    <div>
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
    </div>
  );
};
