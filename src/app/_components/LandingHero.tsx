import { alluraFont, archivoBlack, bitCountFont } from "@/components/Fonts";
import Image from "next/image";
import styles from "../page.module.css";
export const LandingHero = () => {
  return (
    <div>
      <div style={{}}>
        <Image
          alt="Landing Spark"
          src={
            "https://res.cloudinary.com/olumidesamuel/image/upload/v1754129686/spark_x4poxb.jpg"
          }
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000",
          height: "100%",
          opacity: 0.8,
        }}
      >
        <div
          style={{
            color: "#fff",
            zIndex: 100,
            textAlign: "center",
            //     border: "1px solid red",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <p className={`${archivoBlack.className} ${styles.heroText}`}>
            Be a{" "}
            <span className={`${bitCountFont.className} ${styles.heroSpark}`}>
              Spark{" "}
            </span>
          </p>

          <p className={`${archivoBlack.className}  ${styles.heroSubText} `}>
            that{" "}
            <span
              className={`${styles.heroSpark} ${alluraFont.className} relative`}
            >
              lights{" "}
              <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 transform -rotate-1 opacity-60"></span>
            </span>{" "}
            up a Dream!
          </p>
        </div>
      </div>
    </div>
  );
};
