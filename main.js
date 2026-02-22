// --- Typing Effect ---
const words = ["Fresher...", "Learner...", "Explorer...", "Senior."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingText = document.querySelector(".typing-text");

function type() {
  currentWord = words[i];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    typingText.textContent = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500); // Pause at end of word
      return;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll(".reveal-from-left, .reveal-fade-up, .reveal-zoom");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
      
      // Specifically for progress bars
      if (entry.target.classList.contains("growth")) {
        animateProgressBars();
      }
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => revealObserver.observe(el));

// Observe the growth section specifically for bars
const growthSection = document.querySelector(".growth");
if (growthSection) revealObserver.observe(growthSection);

// --- Progress Bar Animation ---
function animateProgressBars() {
  const progresses = document.querySelectorAll(".progress");
  const percentages = document.querySelectorAll(".percentage");
  
  progresses.forEach((bar, index) => {
    const targetWidth = bar.getAttribute("data-width");
    bar.style.width = targetWidth;
    
    // Animate percentage text
    const targetValue = parseInt(percentages[index].getAttribute("data-target"));
    let currentValue = parseInt(percentages[index].textContent);
    
    const interval = setInterval(() => {
      if (currentValue >= targetValue) {
        clearInterval(interval);
      } else {
        currentValue++;
        percentages[index].textContent = currentValue + "%";
      }
    }, 20);
  });
}

// --- Comparison Slider ---
const slider = document.querySelector(".comparison-slider");
const handle = document.querySelector(".slider-handle");
const afterImage = document.querySelector(".image-after");
const afterImgTag = afterImage.querySelector("img");

function moveSlider(e) {
  const rect = slider.getBoundingClientRect();
  let x = (e.pageX || e.touches[0].pageX) - rect.left;
  
  if (x < 0) x = 0;
  if (x > rect.width) x = rect.width;
  
  const percent = (x / rect.width) * 100;
  handle.style.left = percent + "%";
  afterImage.style.width = percent + "%";
  
  // Keep the image fixed size
  afterImgTag.style.width = (100 / (percent / 100)) + "%";
}

let isDragging = false;

if (handle) {
  handle.addEventListener("mousedown", () => isDragging = true);
  handle.addEventListener("touchstart", () => isDragging = true);
}

window.addEventListener("mouseup", () => isDragging = false);
window.addEventListener("touchend", () => isDragging = false);

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  moveSlider(e);
});

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  moveSlider(e);
});

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  type();
  
  // Set initial image widths correctly for the slider
  if (afterImage) {
    const initialPercent = 50;
    afterImage.style.width = initialPercent + "%";
    afterImgTag.style.width = (100 / (initialPercent / 100)) + "%";
  }
});

// --- Subtle Parallax ---
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.backgroundPositionY = -(scrolled * 0.5) + "px";
  }
});
