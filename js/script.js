let snake;
let nextStep;
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

rightBtn.addEventListener ('click',
    function () {
        snake = document.querySelector('.snake');
        console.log(snake);

        nextStep = document.querySelector('.snake+.col');
        console.log(nextStep);

        snake.classList.remove('snake');
        nextStep.classList.add('snake')
    }
)