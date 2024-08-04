const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset"); 
const configureBtn = document.querySelector("#configure");
let size = 16;

function getGridSize() {
    size = prompt("enter number of rows");
    if (!(size >=1 && size<=100)) {
        alert('please enter a valid number between 1 and 100')
    }
}

configureBtn.addEventListener('click', ()=> getGridSize());

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(square) {
    square.style.backgroundColor = getRandomColor();
}


function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;
        square.addEventListener('mouseover', function() {changeColor(square)} );
        container.appendChild(square);
      }
}


createGrid(size)
 









