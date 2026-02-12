const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const card = document.getElementById("card");
const noArea = document.getElementById("noArea");

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  card.classList.add("success");

  title.innerHTML = `
    You just made my whole year better. I LOVE YOU! <br/>
    We are a perfect Match
  `;

  yesBtn.textContent = "🥰";
  noBtn.style.display = "none";
});

/* NO BUTTON MOVES AROUND WIDER AREA (inside no-area, not over hint) */
function moveNoButton() {
  const areaRect = noArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Keep it away from edges + keep it out of the hint zone
  const padding = 16;
  const hintZone = 44; // must match reserved hint space (padding-bottom-ish)

  const maxX = areaRect.width - btnRect.width - padding * 2;
  const maxY = areaRect.height - btnRect.height - padding * 2 - hintZone;

  const x = padding + Math.random() * Math.max(0, maxX);
  const y = padding + Math.random() * Math.max(0, maxY);

  // because button is centered by translateX(-50%) ONLY on initial state,
  // remove transform once we start positioning with left/top pixels.
  noBtn.style.transform = "none";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);