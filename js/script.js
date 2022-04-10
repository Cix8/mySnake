let snake;
let a = 1;
let b = 1;
let nextStep;
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const downBtn = document.getElementById('down-btn');
const upBtn = document.getElementById('up-btn');

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
    }
)