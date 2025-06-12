document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("landing-page")) {
    gsap.from(".title", { y: -100, opacity: 0, duration: 1 });
    gsap.from(".name", { x: -100, opacity: 0, delay: 0.5, duration: 1 });
    gsap.from(".subtext", { x: 100, opacity: 0, delay: 1, duration: 1 });
    gsap.from(".btn", { scale: 0, opacity: 0, delay: 1.5, duration: 1 });
  }

  if (document.body.classList.contains("surprise-page")) {
    gsap.from(".message-box", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".gallery img", {
      opacity: 0,
      stagger: 0.2,
      delay: 1,
      scale: 0.8,
      duration: 0.8,
    });
  }
});
