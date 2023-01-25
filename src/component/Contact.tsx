"use client";
import Image from "next/image";
import React, { MouseEventHandler, useRef } from "react";
// import styles from "src/styles/css/Contact.module.css";
import styles from "src/styles/css/Form.module.css";

export const Contact = () => {
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
      unit: false,
    },
  ];

  return (
    <div id="contact">
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
                  {item.unit ? <p>万円</p> : null}
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
    </div>
  );
};
