const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
//const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

function moveNoButton() {
    const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
    const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Desktop: when mouse approaches
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile: when user tries to touch it
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // stops actual click
    moveNoButton();
});


questionContainer.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const rect = noBtn.getBoundingClientRect();

    const dx = touch.clientX - rect.left;
    const dy = touch.clientY - rect.top;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 80) { // pixels
        moveNoButton();
    }
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
  }, 3000);
});
