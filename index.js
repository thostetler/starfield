const urlParams = new URLSearchParams(window.location.search);
const height = urlParams.get("height");
const width = urlParams.get("width");
const MAX_STARS = urlParams.get("stars");

document.write(`<canvas id="field" width="${width}" height="${height}"></canvas>`);

const field = document.getElementById("field");
const ctx = field.getContext("2d");
const getRan = (min, max) => Math.random() * (max - min) + min;

const addStar = (x, y, brightness = getRan(10, 100)) => {
  ctx.filter = `brightness(${brightness})`;
  ctx.beginPath();
  ctx.arc(x, y, 1, 2 * Math.PI, true);
  ctx.fillStyle = "white";
  ctx.fill();
};

ctx.beginPath();
ctx.rect(0, 0, width, height);
ctx.fillStyle = "black";
ctx.fill();

for (let i = 0; i < MAX_STARS; i++) {
  addStar(getRan(0, width), getRan(0, height));
}
