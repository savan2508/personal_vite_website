import { useState, useCallback } from "react";
import { backgrounds } from "@/data/backgrounds";

// Define your desired default background here.
// Based on your previous setup, this video was the default.
const defaultBackground = {
  type: "image",
  source: "/assets/img/background_image/img6.jpg",
};

export const useRandomBackground = () => {
  // Initialize the state with the default background.
  const [currentBackground, setCurrentBackground] = useState(defaultBackground);

  const changeBackground = useCallback(() => {
    // Ensure the new random background is different from the current one.
    let newBackground;
    do {
      newBackground =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];
    } while (
      backgrounds.length > 1 &&
      newBackground.source === currentBackground.source
    );
    setCurrentBackground(newBackground);
  }, [currentBackground.source]);

  return { currentBackground, changeBackground };
};
