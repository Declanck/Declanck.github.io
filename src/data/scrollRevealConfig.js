export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 300,
      distance: "30px",
      origin: "bottom",
    },
  },
  {
    element: ".section-subtitle",
    animation: {
      delay: 400,
      distance: "30px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 500,
      origin: "bottom",
      distance: "30px",
    },
  },
  {
    element: ".hero-subtitle",
    animation: {
      delay: 700,
      origin: "bottom",
      distance: "30px",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 900,
      origin: "bottom",
      distance: "30px",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
      distance: "30px",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 800,
      origin: "bottom",
      distance: "30px",
    },
  },
  {
    element: ".wechat-qr",
    animation: {
      delay: 500,
      origin: "left",
      distance: "30px",
    },
  },
  {
    element: ".wechat-content",
    animation: {
      delay: 700,
      origin: "right",
      distance: "30px",
    },
  },
  {
    element: ".photo-filter",
    animation: {
      delay: 400,
      origin: "bottom",
      distance: "20px",
    },
  },
  {
    element: ".photo-item",
    animation: {
      delay: 500,
      origin: "bottom",
      distance: "30px",
      interval: 100,
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 500,
      origin: "bottom",
      distance: "30px",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 700,
      origin: "bottom",
      distance: "30px",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 500,
      origin: "bottom",
      distance: "30px",
    },
  },
];
