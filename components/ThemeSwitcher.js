"use client";

import { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.css";

const themes = {
  citrus: {
    label: "🍋 Citrus (текущая)",
    vars: {} // default — nothing to override
  },
  matcha: {
    label: "🍵 Miss Matcha",
    vars: {
      "--color-sunrise": "#F06C8E",
      "--color-sunrise-light": "#F5A0B5",
      "--color-sunrise-dark": "#D44A6C",
      "--color-teal": "#A8BF5A",
      "--color-teal-light": "#C2D47E",
      "--color-teal-dark": "#2D5A27",
      "--color-sun": "#2D5A27",
      "--color-sun-light": "#B8D48A",
      "--color-lavender": "#F5C6D6",
      "--color-rose": "#F06C8E",
      "--color-cream": "#E8F0D8",
      "--color-cream-alt": "#F0F5E6",
      "--color-bg": "#FAFCF5",
      "--color-border": "#D0DDB8",
    }
  },
  tropical: {
    label: "🥭 Tropical Market",
    vars: {
      "--color-sunrise": "#F76C8C",
      "--color-sunrise-light": "#F99AB0",
      "--color-sunrise-dark": "#D44A6C",
      "--color-teal": "#3E8E62",
      "--color-teal-light": "#6BAF8A",
      "--color-teal-dark": "#2C6B48",
      "--color-sun": "#FFC247",
      "--color-sun-light": "#FFD780",
      "--color-lavender": "#F99AB0",
      "--color-rose": "#F76C8C",
      "--color-cream": "#F6EDDF",
      "--color-cream-alt": "#FBF5EA",
      "--color-bg": "#FFFCF5",
      "--color-border": "#E8DCC8",
    }
  },
  bird: {
    label: "🐦 Exotic Bird",
    vars: {
      "--color-sunrise": "#E6266E",
      "--color-sunrise-light": "#B84870",
      "--color-sunrise-dark": "#C01A58",
      "--color-teal": "#0E7E7E",
      "--color-teal-light": "#3CA5A5",
      "--color-teal-dark": "#0C3542",
      "--color-sun": "#B5B84A",
      "--color-sun-light": "#CDD06A",
      "--color-lavender": "#B84870",
      "--color-rose": "#E6266E",
      "--color-cream": "#E0ECE4",
      "--color-cream-alt": "#EDF3EE",
      "--color-bg": "#F5FAF6",
      "--color-border": "#C0D5C8",
    }
  },
  neon: {
    label: "⚡ Neon Tropical",
    vars: {
      "--color-sunrise": "#F62D93",
      "--color-sunrise-light": "#F86BB3",
      "--color-sunrise-dark": "#D41A7A",
      "--color-teal": "#44BDBD",
      "--color-teal-light": "#72D2D2",
      "--color-teal-dark": "#41631E",
      "--color-sun": "#C9E51A",
      "--color-sun-light": "#D9EE5C",
      "--color-lavender": "#F86BB3",
      "--color-rose": "#F62D93",
      "--color-cream": "#EEFACC",
      "--color-cream-alt": "#F5FCDF",
      "--color-bg": "#FAFDE8",
      "--color-border": "#D8E8A0",
    }
  },
  lavender: {
    label: "💜 Lavender Garden",
    vars: {
      "--color-sunrise": "#A88AED",
      "--color-sunrise-light": "#C4B0F5",
      "--color-sunrise-dark": "#7E5CC8",
      "--color-teal": "#CBD83B",
      "--color-teal-light": "#DBE56A",
      "--color-teal-dark": "#9AAD1E",
      "--color-sun": "#CBD83B",
      "--color-sun-light": "#E0E978",
      "--color-lavender": "#C4B0F5",
      "--color-rose": "#A88AED",
      "--color-cream": "#FFFEEC",
      "--color-cream-alt": "#FFFFF4",
      "--color-bg": "#FFFFF8",
      "--color-border": "#E6E4D0",
    }
  }
};

// stash default values so we can restore them
let defaultVars = null;

function captureDefaults() {
  if (defaultVars) return;
  const root = document.documentElement;
  const cs = getComputedStyle(root);
  defaultVars = {};
  // capture every var key that any theme could override
  const allKeys = new Set();
  Object.values(themes).forEach((t) =>
    Object.keys(t.vars).forEach((k) => allKeys.add(k))
  );
  allKeys.forEach((k) => {
    defaultVars[k] = cs.getPropertyValue(k).trim();
  });
}

function applyTheme(name) {
  captureDefaults();
  const root = document.documentElement;
  // first restore defaults
  if (defaultVars) {
    Object.entries(defaultVars).forEach(([k, v]) =>
      root.style.setProperty(k, v)
    );
  }
  // then overlay the chosen theme
  const chosen = themes[name];
  if (chosen) {
    Object.entries(chosen.vars).forEach(([k, v]) =>
      root.style.setProperty(k, v)
    );
  }
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("citrus");

  useEffect(() => {
    // check URL ?theme=xxx
    const params = new URLSearchParams(window.location.search);
    const t = params.get("theme");
    if (t && themes[t]) {
      setActive(t);
      applyTheme(t);
    }
  }, []);

  const pick = (name) => {
    setActive(name);
    applyTheme(name);
    // update URL without reload
    const url = new URL(window.location);
    if (name === "citrus") {
      url.searchParams.delete("theme");
    } else {
      url.searchParams.set("theme", name);
    }
    window.history.replaceState({}, "", url);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.fab}
        onClick={() => setOpen(!open)}
        aria-label="Сменить тему"
        title="Попробовать другую палитру"
      >
        🎨
      </button>
      {open && (
        <div className={styles.panel}>
          <p className={styles.panelTitle}>Палитра сайта</p>
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              className={`${styles.option} ${active === key ? styles.optionActive : ""}`}
              onClick={() => pick(key)}
            >
              {theme.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
