import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsCheck } from "react-icons/bs";
import styles from "src/styles/css/Confirm.module.css";

const Confirm = () => {
  const CONFIRMITEMS = [
    { title: "お名前", value: "" },
    { title: "メールアドレス", value: "" },
    { title: "発電所住所", value: "" },
    { title: "FIT単価（税込）", value: "" },
    { title: "DC容量", value: "" },
    { title: "配線図", value: "" },
    { title: "遠隔監視システムの導入", value: "" },
    { title: "直近1年でのメンテナンス", value: "" },
    { title: "パネルメーカー", value: "" },
    { title: "PCSメーカー", value: "aaa" },
  ];
  return (
    <main className={styles.confirm}>
      <h2>入力内容の確認</h2>
      <div className={styles.box}>
        {CONFIRMITEMS.map((item) => {
          return (
            <div className={styles.one} key={item.title}>
              <p>{item.title}</p>
              <input type="hidden" name="" id="" value={item.value} />
            </div>
          );
        })}
        <div className={styles.privacy}>
          <div className={styles.check}>
            <BsCheck size="2rem" />
          </div>
          <p>プライバシーポリシーに同意する。</p>
        </div>
        <Link className={styles.confirmImg} href={"/Thanks"}>
          <Image src={`/contact/confirm-btn.png`} alt={""} fill sizes="" />
        </Link>
      </div>
    </main>
  );
};

export default Confirm;
