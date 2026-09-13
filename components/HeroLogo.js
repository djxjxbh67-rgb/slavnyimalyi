"use client";

import { useRef, useEffect, useCallback } from "react";
import styles from "./HeroLogo.module.css";

export default function HeroLogo() {
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const playAnimation = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  const scheduleNextPlay = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Natural pause between animations
    timerRef.current = setTimeout(() => {
      playAnimation();
    }, 6500);
  }, [playAnimation]);

  const handleEnded = () => {
    scheduleNextPlay();
  };

  const handleInteraction = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      playAnimation();
    }
  };

  useEffect(() => {
    // Initial welcome play on load after 1.2s
    const initialTimer = setTimeout(() => {
      playAnimation();
    }, 1200);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [playAnimation]);

  return (
    <div
      className={styles.heroCard}
      onMouseEnter={handleInteraction}
      onClick={handleInteraction}
      role="button"
      tabIndex={0}
      aria-label="Эмблема детского сада «Славный Малый» — нажмите, чтобы ёжик подмигнул"
    >
      <div className={styles.heroCardRing1} aria-hidden="true" />
      <div className={styles.heroCardRing2} aria-hidden="true" />

      {/* Whole emblem video (no cutouts, no seams, no opacity jumps) */}
      <video
        ref={videoRef}
        src="/images/logo-animated.mp4"
        poster="/images/logo.webp"
        playsInline
        muted
        preload="auto"
        onEnded={handleEnded}
        className={styles.heroLogoVideo}
      />
    </div>
  );
}
