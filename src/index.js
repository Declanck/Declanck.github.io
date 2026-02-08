import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initPhotoFilter from "./scripts/photoFilter";
import initNavbar from "./scripts/navbar";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// Initialize all modules
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initPhotoFilter();
initNavbar();

// Lightbox configuration
if (window.lightbox) {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    showImageNumberLabel: false,
    fadeDuration: 300,
  });
}
