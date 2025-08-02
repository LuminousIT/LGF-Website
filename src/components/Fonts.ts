import {
  Archivo_Black,
  Bitcount_Grid_Double,
  Allura,
  Permanent_Marker,
} from "next/font/google";

export const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const bitCountFont = Bitcount_Grid_Double({
  variable: "--font-bitcount-grid-double",
  subsets: ["latin"],
});

export const alluraFont = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const permanentMarkerFont = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});
