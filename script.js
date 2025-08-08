
const symbols = ["💎", "🔱", "⚡", "👑", "🔥", "💰", "🟣", "🔷", "🔺", "🟢", "🔴", "🔶"];
const slotGrid = document.getElementById("slotGrid");
const balanceDisplay = document.getElementById("balance");
const winDisplay = document.getElementById("winAmount");

let balance = 1000;
const spinCost = 60;

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateGrid() {
  slotGrid.innerHTML = "";
  for (let i = 0; i < 30; i++) {
    const cell = document.createElement("div");
    cell.className = "slot-cell";
    cell.textContent = getRandomSymbol();
    slotGrid.appendChild(cell);
  }
}

function spin() {
  if (balance < spinCost) {
    alert("Not enough balance!");
    return;
  }

  balance -= spinCost;

  generateGrid();

  const win = Math.random() > 0.5 ? Math.floor(Math.random() * 500) : 0;
  balance += win;

  balanceDisplay.textContent = balance;
  winDisplay.textContent = win;
}

generateGrid();
