import { ColorMode } from "@hope-ui/styles";

import { ColorModeStorageManager } from "./types";

const classNames = {
  light: "hope-theme-light",
  dark: "hope-theme-dark",
};

function query() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}

function preventTransition() {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );
  document.head.appendChild(css);

  return () => {
    // force a reflow
    (() => window.getComputedStyle(document.body))();

    // wait for next tick
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css);
      });
    });
  };
}

export function setColorModeClassName(isDark: boolean) {
  document.body.classList.add(isDark ? classNames.dark : classNames.light);
  document.body.classList.remove(isDark ? classNames.light : classNames.dark);
}

export function setColorModeDataset(value: ColorMode, shouldPreventTransition = true) {
  const cleanup = shouldPreventTransition ? preventTransition() : undefined;
  document.documentElement.dataset.theme = value;
  document.documentElement.style.colorScheme = value;
  cleanup?.();
}

export function getSystemColorMode(fallback?: ColorMode): ColorMode {
  const isDark = query().matches ?? fallback === "dark";
  return isDark ? "dark" : "light";
}

export function getInitialColorMode(manager: ColorModeStorageManager, fallback: ColorMode) {
  if (manager.type === "cookie" && manager.ssr) {
    return manager.get() ?? fallback;
  }

  return fallback;
}

export function addColorModeListener(fn: (cm: ColorMode) => unknown) {
  const mql = query();

  const listener = (e: MediaQueryListEvent) => {
    fn(e.matches ? "dark" : "light");
  };

  mql.addEventListener("change", listener);

  return () => {
    mql.removeEventListener("change", listener);
  };
}
