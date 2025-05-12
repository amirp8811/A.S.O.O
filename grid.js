// grid.js
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 10; // 10x10 grid
const cellWidth = canvas.width / gridSize;
const cellHeight = canvas.height / gridSize;

const wordList = ["apple", "brick", "tree", "wolf", "lamp", "fish", "sky", "ghost", "king", "dust"];

// Draw the grid
for (let x = 0; x < gridSize; x++) {
  for (let y = 0; y < gridSize; y++) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.strokeRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
}

// Convert cell coordinates to 3-word address
function getThreeWordCode(x, y) {
  const seed = (x * 31 + y * 17) % 1000;
  const w1 = wordList[(seed + 1) % wordList.length];
  const w2 = wordList[(seed + 2) % wordList.length];
  const w3 = wordList[(seed + 3) % wordList.length];
  return `${w1}.${w2}.${w3}`;
}

// Handle click
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / cellWidth);
  const y = Math.floor((e.clientY - rect.top) / cellHeight);
  const code = getThreeWordCode(x, y);
  alert(`You clicked cell [${x}, ${y}] → ${code}`);
});
