import VanillaTilt from "vanilla-tilt";

export default function initTiltEffect() {
  const elements = document.querySelectorAll(".js-tilt");
  
  if (elements.length > 0) {
    VanillaTilt.init(elements, {
      max: 4,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }
}
