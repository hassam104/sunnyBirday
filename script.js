document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("landing-page")) {
    // index.html animations
    gsap.from(".title", { y: -100, opacity: 0, duration: 1 });
    gsap.from(".name", { x: -100, opacity: 0, delay: 0.5, duration: 1 });
    gsap.from(".subtext", { x: 100, opacity: 0, delay: 1, duration: 1 });
    gsap.from(".btn", { scale: 0, opacity: 0, delay: 1.5, duration: 1 });

    launchConfetti();
  }

  if (document.body.classList.contains("surprise-page")) {
    // surprise.html animations
    gsap.from(".message-box", { opacity: 0, y: 50, duration: 1 });

    // Animate each image in the gallery
    gsap.from(".gallery img", {
      opacity: 0,
      scale: 0.6,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
    });

    launchConfetti();
  }
});

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 },
  });
}

function startSurprise() {
  launchConfetti();
  setTimeout(() => {
    window.location.href = "surprise.html";
  }, 1200);
}
