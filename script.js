const container = document.querySelector('.container');
const dimBtn = document.querySelector('.dimbtn');
const resetBtn = document.querySelector('.reset');
const colorBtn = document.querySelector('.colorbtn');
const rmBtn = document.querySelector('.rmcolor')

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
            cell.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            opacityValue = 0.1;
        })
    
        let opacityValue = 0.1;
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = `rgba(0, 0, 0, ${opacityValue})`;
            opacityValue += 0.1;
        });


        colorBtn.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
            })
        });

        rmBtn.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = `rgba(0, 0, 0, ${opacityValue})`;
            })
        }) 
    };

};

const randomRgb = () => Math.floor(Math.random() * 255);
//const draw = () => cell.style.backgroundColor = `rgba(0, 0, 0, ${opacityValue})`; opacityValue += 0.1;
etchASketch();