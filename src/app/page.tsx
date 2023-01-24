import { Inter } from "@next/font/google";
import styles from "src/styles/css/Home.module.css";
import { CvContact } from "src/component/CvContact";
import { Flow } from "src/component/Flow";
import { Reason } from "src/component/Reason";
import { About } from "@/component/About";
import { Faq } from "src/component/Faq";
import { FirstView } from "src/component/FirstView";
import { Hero } from "src/component/Hero";
import { Contact } from "src/component/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <FirstView />
        <Hero />
        <About />
        <CvContact />
        <Reason />
        <CvContact />
        <Flow />
        <Faq />
        <CvContact />
        <Contact />
      </main>
    </div>
  );
}
