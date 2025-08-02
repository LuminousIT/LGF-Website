import {
  alluraFont,
  archivoBlack,
  permanentMarkerFont,
} from "@/components/Fonts";
import styles from "../page.module.css";
import Image from "next/image";

const CompanyInfo = () => {
  return (
    <div
      className={`${styles.companyInfoContainer} ${archivoBlack.className}  `}
    >
      <div className={`${styles.infoTitleBox} relative p-8`}>
        <div className={`${styles.starOne}`}>
          <Image
            src={
              "https://res.cloudinary.com/olumidesamuel/image/upload/v1754142183/IMG_9735-removebg-preview_bldkto.png"
            }
            width={250}
            height={150}
            alt="stars"
          />
        </div>
        <h2 className={`${styles.companyInfoTitle}`}>LIGHT GROUP FOUNDATION</h2>
        <p className={`${permanentMarkerFont.className}`}>
          ...being a vehicle to impact lives through Arts and Technology!
        </p>
        <div className={`${styles.starTwo}`}>
          <Image
            src={
              "https://res.cloudinary.com/olumidesamuel/image/upload/v1754142183/IMG_9735-removebg-preview_bldkto.png"
            }
            width={200}
            height={100}
            alt="stars"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
