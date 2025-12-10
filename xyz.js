const wheel = document.getElementById("wheel");
const result = document.getElementById("result");
const spinBtn = document.getElementById("spinBtn");

const prizes = [
  "🎉 Nahazo 5 000 Ar!",
  "😢 Tsy nisy vintana!",
  "🎁 Nahazo Bonus!",
  "🎉 Nahazo 10 000 Ar!",
  "🍀 Nahazo Vintana manokana!",
  "😢 Very!",
  "🎉 Nahazo 20 000 Ar!",
  "🎊 Mega Bonus!"
];

spinBtn.addEventListener("click", () => {
  let randomDegree = Math.floor(3600 + Math.random() * 360);

  wheel.style.transform = `rotate(${randomDegree}deg)`;

  spinBtn.disabled = true;
  result.textContent = "Miandry aloha...";

  setTimeout(() => {
    let normalized = randomDegree % 360;
    let sector = Math.floor(normalized / 45); 
    result.textContent = prizes[sector];
    spinBtn.disabled = false;
  }, 4200);
});
