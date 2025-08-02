import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "../page.module.css";

export const FooterDetails = () => {
  return (
    <div
      className={`${styles.footerContainer} bg-gradient-to-r from-gray-900 to-black text-white`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
            O.S
          </div>
          <div>
            <h4 className="font-semibold text-sm">S.O Oluwole</h4>
            <p className="text-xs text-gray-400">Founder</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center">
          <p className="text-sm text-gray-300">
            Built with{" "}
            <Icon icon={"streamline-stickies-color:love"} className="inline" />{" "}
            by Luminous for LGF
          </p>
          <p className="text-xs text-gray-400">© 2025 All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Icon icon="line-md:twitter-x" className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Icon icon={"devicon:linkedin"} className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Icon icon={"logos:google-gmail"} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
