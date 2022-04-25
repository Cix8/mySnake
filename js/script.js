const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer);
const leftBtn = document.getElementById('left-btn');
console.log(leftBtn);
const upBtn = document.getElementById('up-btn');
console.log(upBtn);
const downBtn = document.getElementById('down-btn');
console.log(downBtn);
const rightBtn = document.getElementById('right-btn');
console.log(rightBtn);
const scoreDisplay = document.querySelector('.score span');
console.log(scoreDisplay);
let score = 0;
let gridSize = 10;

let x = 1;
let y = 1;
let a = numberGenerator(2,gridSize);
let b = numberGenerator(2,gridSize);

let myInterval = 500;
let time = 0;

createSquareGrid(gridSize, gridContainer);

let row = document.getElementById('row-'+y);
let col = document.querySelector('#row-'+y+' .col-'+x);
let appleRow = document.getElementById('row-'+a);
let appleCol = document.querySelector('#row-'+a+' .col-'+b);
console.log(row);
console.log(col);
col.classList.add('snake');
appleCol.classList.add('apple');

let snakeEating = false;

rightBtn.addEventListener('click', () => {
    clearInterval(time);
    movementRight();
    time = setInterval(movementRight, myInterval);
})

downBtn.addEventListener('click', () => {
    clearInterval(time);
    movementDown();
    time = setInterval(movementDown, myInterval);
})

leftBtn.addEventListener('click', () => {
    clearInterval(time);
    movementLeft();
    time = setInterval(movementLeft, myInterval)
})

upBtn.addEventListener('click', () => {
    clearInterval(time);
    movementUp();
    time = setInterval(movementUp, myInterval)
})



//                          GAME-FUNCTIONS


//      GRID-GENERATOR
/**
 * Description creating a function that builds a square-game-grid
 * @param {number} rowCol is the number of rows and columns in grid 
 * @param {DOM element} grid is the grid where the function append the elements
 * @returns {DOM element} is the final grid
 */
function createSquareGrid(rowCol, grid) {
    for (let i = 1; i <= rowCol; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.setAttribute('id', 'row-'+i);
        for (let j = 1; j <= rowCol; j++) {
            const newCol = document.createElement('div');
            newCol.classList.add('col', 'col-'+j);
            console.log(newCol);
            newRow.append(newCol);
        }
        console.log(newRow);
        grid.append(newRow)
        console.log(grid);
    }
}

//      SNAKE-MOVEMENT
/**
 * Description creating a function that makes move the snake to the right
 * @returns {DOM element} assign 'snake' class to a specific 'div.col'
 */
function movementRight() {
    snakeEating = col.classList.contains('apple');
    if (snakeEating) {
        eatingApple();
    }
    col.classList.remove('snake');
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    console.log(row);
    console.log(col);
    if (x < gridSize) {
        x++;
    } else {
        x = 1;
    }
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    col.classList.add('snake');
    console.log(row);
    console.log(col);
}

/**
 * Description creating a function that makes move the snake to the left
 * @returns {DOM element} assign 'snake' class to a specific 'div.col'
 */
function movementLeft() {
    snakeEating = col.classList.contains('apple');
    if (snakeEating) {
        eatingApple();
    }
    col.classList.remove('snake');
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    console.log(row);
    console.log(col);
    if (x > 1) {
        x--;
    } else {
        x = gridSize;
    }
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    col.classList.add('snake');
    console.log(row);
    console.log(col);
}

/**
 * Description creating a function that makes move the snake to the bottom
 * @returns {DOM element} assign 'snake' class to a specific 'div.col'
 */
function movementDown() {
    snakeEating = col.classList.contains('apple');
    if (snakeEating) {
        eatingApple();
    }
    col.classList.remove('snake');
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    console.log(row);
    console.log(col);
    if (y < gridSize) {
        y++;
    } else {
        y = 1;
    }
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    col.classList.add('snake');
    console.log(row);
    console.log(col);
}

/**
 * Description creating a function that makes move the snake to the top
 * @returns {DOM element} assign 'snake' class to a specific 'div.col'
 */
function movementUp() {
    snakeEating = col.classList.contains('apple');
    if (snakeEating) {
        eatingApple();
    }
    col.classList.remove('snake');
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    console.log(row);
    console.log(col);
    if (y > 1) {
        y--;
    } else {
        y = gridSize;
    }
    row = document.getElementById('row-'+y);
    col = document.querySelector('#row-'+y+' .col-'+x);
    col.classList.add('snake');
    console.log(row);
    console.log(col);
}

//      RANDOM-NUMBER-GENERATOR

/**
 * Description JavaScript function that always returns a random number between min and max (both included)
 * @param {Number} min is the number from which we start
 * @param {Number} max is the number we stop at
 * @returns {Number} a random number between min and max
 */
function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//      SNAKE-EATING

/**
 * Description creating a function that moves the apple on a new random position that depend on a and b values
 * @returns {DOM-element} assign 'apple' class to a specific-random 'div.col'
 */
function eatingApple() {
    score++;
    if (myInterval > 100) {
        myInterval -= 10;
    }
    scoreDisplay.innerHTML = 'SCORE: '+score;
    a = numberGenerator(1, gridSize);
    b = numberGenerator(1, gridSize);
    const moveApple = document.querySelector('#row-'+a+' .col-'+b);
    col.classList.remove('apple');
    moveApple.classList.add('apple');
}