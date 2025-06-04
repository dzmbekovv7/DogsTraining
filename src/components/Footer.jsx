import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container relative w-full min-h-[180px] p-8 flex flex-col items-center bg-footer-bg text-white select-none overflow-visible">

      {/* Кормушка */}
      <div className="feeder absolute bottom-8 right-12 w-20 h-16 rounded-lg bg-yellow-400 shadow-lg flex justify-center items-center text-xl font-bold text-white z-30">
        🍖
      </div>

      {/* Животные идут к кормушке */}
      <div className="animals-track absolute bottom-14 left-4 flex gap-6 z-20">
        <ion-icon name="paw-outline" class="paw-icon flying-paw delay1"></ion-icon>
        <ion-icon name="paw-outline" class="paw-icon flying-paw delay2"></ion-icon>
        <ion-icon name="logo-octocat" class="animal-icon walking-animal delay3"></ion-icon>
        <ion-icon name="paw-outline" class="paw-icon flying-paw delay4"></ion-icon>
        <ion-icon name="paw-outline" class="paw-icon flying-paw delay5"></ion-icon>
      </div>

      {/* Соцсети */}
      <ul className="social-links flex gap-6 mt-6 z-30">
        {[
          { name: "logo-facebook" },
          { name: "logo-twitter" },
          { name: "logo-linkedin" },
          { name: "logo-instagram" },
        ].map((icon) => (
          <li key={icon.name}>
            <a
              href="#"
              className="social-icon"
              aria-label={icon.name}
            >
              <ion-icon name={icon.name}></ion-icon>
            </a>
          </li>
        ))}
      </ul>

      {/* Навигация */}
      <nav className="footer-nav mt-6 z-30 flex flex-col sm:flex-row gap-4 sm:gap-10 text-center">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Blog", path: "/articles" },
          { name: "Testimonials", path: "/reviews" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="nav-link"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Копирайт */}
      <div className="copyright mt-8 text-sm text-gray-300 select-text z-30">
        © 2025 <span className="font-semibold text-yellow-400">BookDragon</span> by Busyok Creative. All rights reserved. |{" "}
        <a href="#" className="privacy-link">
          Privacy Policy
        </a>
      </div>

      {/* Ionicons Scripts */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </footer>
  );
};

export default Footer;
