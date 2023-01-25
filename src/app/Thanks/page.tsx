import React from "react";
import styles from "src/styles/css/Thanks.module.css";

const Thanks = () => {
  return (
    <main className={styles.thanks}>
      <div className={styles.box}>
        <h2>お問い合わせありがとうございました。</h2>
        <p>
          お問い合わせいただき誠にありがとうございます。<span></span>
          送信いただいた内容を確認のうえ、担当者よりご連絡させていただきます。
          <span></span>
          今しばらくお待ちください。
        </p>
      </div>
    </main>
  );
};

export default Thanks;
