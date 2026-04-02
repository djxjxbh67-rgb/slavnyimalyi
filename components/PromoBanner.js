"use client";

import { useState, useEffect } from "react";
import styles from "./PromoBanner.module.css";
import promoData from "../data/promo.json";

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!promoData.enabled) return;
    if (promoData.expiresAt && new Date(promoData.expiresAt) < new Date()) return;
    if (sessionStorage.getItem("promo-dismissed") === "1") return;
    setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("promo-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} id="promo-banner">
      <a href="#promo" className={styles.bannerLink}>
        {promoData.bannerText}
      </a>
      <button
        className={styles.close}
        onClick={dismiss}
        aria-label="Закрыть баннер"
      >
        ✕
      </button>
    </div>
  );
}
