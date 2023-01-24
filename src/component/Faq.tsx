import styles from "src/styles/css/Home.module.css";

export const Faq = () => {
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
  return (
    <div>
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
    </div>
  );
};
