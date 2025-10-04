// Import videos from their new location (e.g., a /videos folder at the project root)
import video1 from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import video4 from "../../videos/video4.mp4";
import video5 from "../../videos/video5.mp4";
import video6 from "../../videos/video6.mp4";
import video7 from "../../videos/video7.mp4";
import video8 from "../../videos/video8.mp4";
import video9 from "../../videos/video9.mp4";
import video10 from "../../videos/video10.mp4";

// Images can still be referenced by their public path for the standard next/image component

export const backgrounds = [
  { type: "video", source: video1 },
  { type: "video", source: video2 },
  { type: "video", source: video3 },
  { type: "video", source: video4 },
  { type: "video", source: video5 },
  { type: "video", source: video6 },
  { type: "video", source: video7 },
  { type: "video", source: video8 },
  { type: "video", source: video9 },
  { type: "video", source: video10 },
  { type: "image", source: "/assets/img/background_image/img1.jpg" },
  { type: "image", source: "/assets/img/background_image/img2.jpg" },
  { type: "image", source: "/assets/img/background_image/img3.jpg" },
  { type: "image", source: "/assets/img/background_image/img4.jpg" },
  { type: "image", source: "/assets/img/background_image/img5.jpg" },
  { type: "image", source: "/assets/img/background_image/img6.jpg" },
];
