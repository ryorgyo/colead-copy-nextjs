import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "src/styles/css/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.imgDiv}>
        <Image src="/global/logo.png" alt={""} fill sizes="" />
      </div>
      <div className={styles.textDiv}>
        <p>株式会社Colead</p>
        <p>東京都千代田区平河町1-8-2</p>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © Colead Allrights Reserved.</p>
      </div>
    </footer>
  );
};
