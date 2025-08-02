import React from "react";
import { archivoBlack } from "@/components/Fonts";
import styles from "../page.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export const FounderDetails = () => {
  return (
    <div className={`${styles.projectsContainer}`}>
      <h2 className={archivoBlack.className}>Founded.</h2>
      <div>
        <h2 className={archivoBlack.className}>LGF</h2>
        <h5>S.O Oluwole</h5>
        <a href="https://www.linkedin.com/in/sooluwole">
          <Icon icon={"devicon:linkedin"} fontSize={16} />
        </a>
      </div>
    </div>
  );
};
