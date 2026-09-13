"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./HeroLogo.module.css";

export default function HeroLogo() {
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const scheduleNextPlay = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Pause for 7 seconds between automatic plays
    timerRef.current = setTimeout(() => {
      playAnimation();
    }, 7000);
  }, [playAnimation]);

  const handleEnded = () => {
    setIsPlaying(false);
    scheduleNextPlay();
  };

  const handleInteraction = () => {
    if (!isPlaying) {
      playAnimation();
    }
  };

  useEffect(() => {
    // Initial welcome animation after 1.2s delay
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

      {/* Razor-sharp static emblem (letters, ring, flowers) */}
      <Image
        src="/images/logo.webp"
        alt="Детский сад «Славный Малый»"
        width={470}
        height={470}
        priority
        className={styles.heroLogoImg}
      />

      {/* Alive animated hedgehog in the inner circle */}
      <div className={styles.hedgehogVideoWrap} aria-hidden="true">
        <video
          ref={videoRef}
          src="/images/hedgehog-animated.mp4"
          playsInline
          muted
          preload="auto"
          onEnded={handleEnded}
          className={`${styles.hedgehogVideo} ${isPlaying ? styles.videoActive : styles.videoIdle}`}
        />
      </div>
    </div>
  );
}
