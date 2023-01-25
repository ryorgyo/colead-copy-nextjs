"use client";
import Image from "next/image";
import styles from "src/styles/css/GlobalBtn.module.css";
import React from "react";
import { Link as Scroll } from "react-scroll";

export const GlobalBtn = () => {
  return (
    <Scroll to="contact" smooth={true} className={styles.btn}>
      <Image
        src={"/global/global-btn.png"}
        alt={""}
        fill
        sizes=""
        style={{ objectFit: "cover" }}
      />
    </Scroll>
  );
};
