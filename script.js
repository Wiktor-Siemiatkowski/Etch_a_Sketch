const container = document.querySelector('.container');
const dimBtn = document.querySelector('.dimbtn');
const resetBtn = document.querySelector('.reset');
const colorBtn = document.querySelector('.colorbtn');
let n = 16;

function etchASketch() {

dimBtn.addEventListener('click', () => {
    n = prompt('Define grid side: ');
    if (n < 0) {
        alert('Side of Grid must be a positive number!')
    } else if (n > 100) {
        alert('Side too big!')
    } else if (isNaN(n)) {
        alert('Input is not a number!')
    } else {
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    container.innerHTML = '';
    createGrid();
}})

createGrid();
}


function createGrid() {
    for (let i = 0; i < n ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.append(cell);

        resetBtn.addEventListener('click', () => {
            cell.style.backgroundColor = 'white';})
    
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });


        colorBtn.addEventListener('click', () => {
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
            })
        })
    };

};

const randomRgb = () => Math.floor(Math.random() * 255);
etchASketch();