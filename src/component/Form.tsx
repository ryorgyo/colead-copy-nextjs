import Image from "next/image";
import React, { MouseEventHandler, useRef } from "react";
import styles from "src/styles/css/Form.module.css";
import { VscTriangleDown } from "react-icons/vsc";
import { BsCheck } from "react-icons/bs";
import Link from "next/link";

export const Form = () => {
  const ABOUTITEMS = [
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

  const FORMITEMS = [
    {
      pattern: "name",
      title: "お名前",
      name: "name",
      essential: true,
      border: true,
    },
    {
      pattern: "input",
      title: "メールアドレス",
      name: "mail",
      essential: true,
      border: false,
    },
    {
      pattern: "headline",
      title: "発電所情報",
      name: "",
      essential: false,
      border: false,
    },
    {
      pattern: "title",
      title: "住所",
      name: "",
      essential: true,
      border: false,
    },
    {
      pattern: "input",
      title: "郵便番号",
      name: "",
      essential: false,
      border: false,
    },
    {
      pattern: "input",
      title: "都道府県",
      name: "",
      essential: false,
      border: false,
    },
    {
      pattern: "input",
      title: "番地",
      name: "",
      essential: false,
      border: true,
    },
    {
      pattern: "input",
      title: "FIT単価（税込）",
      name: "",
      essential: true,
      border: true,
    },
    {
      pattern: "input",
      title: "DC容量",
      name: "",
      essential: true,
      unit: "KW",
      border: true,
    },
    {
      pattern: "radio",
      title: "配線図",
      name: "diagram",
      essential: false,
      border: true,
    },
    {
      pattern: "radio",
      title: "遠隔監視システムの導入",
      name: "remote",
      essential: false,
      border: true,
    },
    {
      pattern: "radio",
      title: "直近1年でのメンテナンス",
      name: "maintenance",
      essential: false,
      border: true,
    },
    {
      pattern: "input",
      title: "パネルメーカー",
      name: "",
      essential: false,
      border: true,
    },
    {
      pattern: "input",
      title: "PCSメーカー",
      name: "",
      essential: false,
      border: true,
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
          {ABOUTITEMS.map((item) => {
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
          <div className={styles.invisible}>
            <p className={styles.title}>
              あなたの太陽光発電所の売却金額はこちら
            </p>
            <div className={styles.borderImg}>
              <Image src={`/contact/border.png`} alt={""} fill sizes="" />
            </div>
            <div className={styles.aboutFee}>
              <p className={styles.headline}>概算売却額</p>
              <input type="number" name="" id="" />
              <p className={styles.unit}>円</p>
            </div>
            <div className={styles.triangle}>
              <VscTriangleDown size="10rem" color={"#E51A3F"} />
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <p className={styles.detail}>
            より正確な金額を知りたい方、売却の相談をご希望の方は
            以下よりお問い合わせください
          </p>
          <form className={styles.formBox}>
            {FORMITEMS.map((item) => {
              if (item.pattern == "name") {
                return (
                  <div className={styles.nameLine} key={item.title}>
                    <div className={styles.left}>
                      <p>{item.title}</p>
                      <p className={styles.essential}>必須</p>
                    </div>
                    <div className={styles.center}>
                      <p className={styles.unit}>姓</p>
                      <input type="text" name="" id="" />
                    </div>
                    <div className={styles.right}>
                      <p className={styles.unit}>名</p>
                      <input type="text" name="" id="" />
                    </div>
                  </div>
                );
              }
              if (item.pattern == "input") {
                return (
                  <div className={styles.oneItem} key={item.title}>
                    <div className={styles.left}>
                      <p className={styles.title}>{item.title}</p>
                      {item.essential ? (
                        <p className={styles.essential}>必須</p>
                      ) : null}
                    </div>
                    <div className={styles.right}>
                      <input type="number" name={item.name} id={item.name} />
                      {item.unit ? <p>{item.unit}</p> : null}
                    </div>
                  </div>
                );
              }
              if (item.pattern == "headline") {
                return (
                  <div className={styles.headline} key={item.title}>
                    <p>{item.title}</p>
                  </div>
                );
              }
              if (item.pattern == "radio") {
                return (
                  <div className={styles.radio} key={item.title}>
                    <div className={styles.left}>
                      <p>{item.title}</p>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.any}>
                        <input
                          type="radio"
                          name={`${item.name}`}
                          id={`any${item.name}`}
                        />
                        <label
                          htmlFor={`any${item.name}`}
                          className={styles.unit}
                        >
                          有
                        </label>
                      </div>
                      <div className={styles.none}>
                        <input
                          type="radio"
                          name={`${item.name}`}
                          id={`none${item.name}`}
                        />
                        <label
                          htmlFor={`none${item.name}`}
                          className={styles.unit}
                        >
                          無
                        </label>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <p className={styles.explan}>
              ご入力いただいたお客さまの個人情報は、
              <span>プライバシーポリシー</span>に基づき適正に取り扱います。
              必ずお読みになり、同意の上お問い合わせください。
            </p>
            <div className={styles.privacy}>
              <div className={styles.check}>
                <BsCheck size="2rem" />
              </div>
              <p>プライバシーポリシーに同意する。</p>
            </div>
            <Link className={styles.confirmImg} href={"/Confirm"}>
              <Image src={`/contact/confirm-btn.png`} alt={""} fill sizes="" />
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};
