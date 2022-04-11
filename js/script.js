let snake;
let a = 1;
let b = 1;
let c;
let d;
let nextStep;
let apple;
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const downBtn = document.getElementById('down-btn');
const upBtn = document.getElementById('up-btn');
const grill = document.querySelector('.grill');

let row;
let col;

for (let i = 1; i <= 20; i++) {
    row = document.createElement('div')
    row.classList.add('row');
    row.setAttribute('id', 'row-'+i);
    for (let j=1; j <= 20; j++) {
        col = document.createElement('div');
        col.classList.add('col', 'col-'+j);
        row.append(col);
    }
    grill.append(row);
}

snake = document.querySelector('#row-'+a+' .col-'+b);
snake.classList.add('snake');

c = Math.floor(Math.random() * 20) +1;
console.log(c);
d = Math.floor(Math.random() * 20) +1;
console.log(d);
nextStep = document.querySelector('#row-'+c+' .col-'+d);
console.log(nextStep);
nextStep.classList.add('apple');

rightBtn.addEventListener ('click',
    function () {
        if (b<20) {
            ++b;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);

            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        } else {
            b = 1;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);

            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        }

        if (snake.classList.contains('apple') == true) {
            c = Math.floor(Math.random() * 20) +1;
            console.log(c);
            d = Math.floor(Math.random() * 20) +1;
            console.log(d);
            snake.classList.remove('apple');
            nextStep = document.querySelector('#row-'+c+' .col-'+d);
            console.log(nextStep);
            nextStep.classList.add('apple');
        }
    }
)

leftBtn.addEventListener ('click',
    function () {
        if (b>1) {
            --b;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);

            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        } else {
            b = 20;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);

            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        }

        if (snake.classList.contains('apple') == true) {
            c = Math.floor(Math.random() * 20) +1;
            console.log(c);
            d = Math.floor(Math.random() * 20) +1;
            console.log(d);
            snake.classList.remove('apple');
            nextStep = document.querySelector('#row-'+c+' .col-'+d);
            console.log(nextStep);
            nextStep.classList.add('apple');
        }
    }
)

downBtn.addEventListener ('click',
    function () {
        if (a<20) {
            ++a;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);
    
            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        } else {
            a = 1;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);

            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        }

        if (snake.classList.contains('apple') == true) {
            c = Math.floor(Math.random() * 20) +1;
            console.log(c);
            d = Math.floor(Math.random() * 20) +1;
            console.log(d);
            snake.classList.remove('apple');
            nextStep = document.querySelector('#row-'+c+' .col-'+d);
            console.log(nextStep);
            nextStep.classList.add('apple');
        }
    }
)

upBtn.addEventListener ('click',
    function () {
        if (a>1) {
            --a;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);
    
            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        } else {
            a = 20;
            snake = document.querySelector('.snake')
            nextStep = document.querySelector('#row-'+a+' .col-'+b);
            console.log(nextStep);

            snake.classList.remove('snake');
            nextStep.classList.add('snake');
        }

        if (snake.classList.contains('apple') == true) {
            c = Math.floor(Math.random() * 20) +1;
            console.log(c);
            d = Math.floor(Math.random() * 20) +1;
            console.log(d);
            snake.classList.remove('apple');
            nextStep = document.querySelector('#row-'+c+' .col-'+d);
            console.log(nextStep);
            nextStep.classList.add('apple');
        }
    }
)