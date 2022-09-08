const container = document.querySelector('.container');
const dimBtn = document.querySelector('.dimbtn');
let n = 16;

function etchASketch() {

dimBtn.addEventListener('click', () => {
    n = prompt('Define grid side: ');
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    container.innerHTML = '';
    createGrid();
})

createGrid();
}


function createGrid() {
    for (let i = 0; i < n ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.append(cell);
    
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    };
};

etchASketch();