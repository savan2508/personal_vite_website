"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for tracking media query status.
 * @param {string} query - The media query string (e.g., '(min-width: 992px)').
 * @returns {boolean} - True if the media query matches, false otherwise.
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};