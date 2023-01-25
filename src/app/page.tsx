import { CvContact } from "src/component/CvContact";
import { Flow } from "src/component/Flow";
import { Reason } from "src/component/Reason";
import { About } from "@/component/About";
import { Faq } from "src/component/Faq";
import { FirstView } from "src/component/FirstView";
import { Hero } from "src/component/Hero";
import { Contact } from "src/component/Contact";
import React from "react";

const Home = () => {
  return (
    <div>
      <main>
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
};

export default Home;
