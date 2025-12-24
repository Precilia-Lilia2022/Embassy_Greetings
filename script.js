// const card = document.getElementById("card");

// card.addEventListener("click", () => {
//   card.classList.toggle("open");
// });

const card = document.getElementById("card");
const textEl = document.getElementById("animated-text");

const message = "Best wishes of peace, good health and prosperity for 2026.💫";

let index = 0;
let typingInterval;

function typeText() {
  if (index < message.length) {
    textEl.textContent += message.charAt(index);
    index++;
  } else {
    clearInterval(typingInterval);
  }
}

card.addEventListener("click", () => {
  card.classList.toggle("open");

  // reset typing when opening
  if (card.classList.contains("open")) {
    textEl.textContent = "";
    index = 0;
    clearInterval(typingInterval);
    typingInterval = setInterval(typeText, 35); // typing speed
  }
});