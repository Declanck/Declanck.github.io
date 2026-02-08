export default function initScrollReveal(targetElements, defaultProps) {
  if (typeof window !== "undefined" && window.ScrollReveal) {
    const sr = ScrollReveal();

    targetElements.forEach(({ element, animation }) => {
      sr.reveal(element, {
        ...defaultProps,
        ...animation,
      });
    });
  }
}
