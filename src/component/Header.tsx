import Image from "next/image";
import styles from "src/styles/css/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.imgDiv}>
        <Image src="/global/logo.png" alt={""} fill sizes="" />
      </h1>
      <div className={styles.textDiv}>
        <p>太陽光発電所の</p>
        <p>スピード買取ならコリード</p>
      </div>
    </header>
  );
};
