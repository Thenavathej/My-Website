const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const headImg = new Image();
headImg.src = "head.png";

const box = 20;
const canvasSize = 400;
let snake = [{ x: 200, y: 200 }];
let food = {
  x: Math.floor(Math.random() * (canvasSize / box)) * box,
  y: Math.floor(Math.random() * (canvasSize / box)) * box
};
let direction = "RIGHT";
let score = 0;
let speed = 200; // initial speed in ms

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

function draw() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  // Draw snake
  snake.forEach((segment, index) => {
    if (index === 0) {
      ctx.drawImage(headImg, segment.x, segment.y, box, box);
    } else {
      ctx.fillStyle = "#0a0";
      ctx.fillRect(segment.x, segment.y, box, box);
    }
  });

  // Draw food
  ctx.fillStyle = "#f00";
  ctx.fillRect(food.x, food.y, box, box);

  // Move snake
  let head = { ...snake[0] };
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;

  // Game over conditions
  if (
    head.x < 0 || head.x >= canvasSize ||
    head.y < 0 || head.y >= canvasSize ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    alert("Game Over! Your score: " + score);
    document.location.reload();
    return;
  }

  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("score").innerText = "Score: " + score;

    // Speed up every 5 points
    if (score % 5 === 0 && speed > 60) {
      speed -= 20;
    }

    food = {
      x: Math.floor(Math.random() * (canvasSize / box)) * box,
      y: Math.floor(Math.random() * (canvasSize / box)) * box
    };
  } else {
    snake.pop();
  }

  setTimeout(draw, speed);
}

// Start the game
draw();
