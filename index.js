const MAX_STARS = 10000;

document.write(`<canvas id="field" width="1920" height="1080"></canvas>`);

const field = document.getElementById("field");
const ctx = field.getContext("2d");
const { width, height } = field.getBoundingClientRect();

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
