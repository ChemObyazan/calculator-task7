let minValue;
let maxValue;
let answerNumber=0;
let orderNumber=0;
let gameRun;
let questionVariants;
let questionRandom;
let question = 'Ваше число';


function startGame() {
    minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));
    minValue = (minValue>-999||minValue==NaN)?minValue:-999;
    maxValue = (maxValue<999||maxValue==NaN)?maxValue:999;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
};

startGame();

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `${question} `+`${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', startGame);

document.getElementById('btnLess').addEventListener('click', function () {
    questionVariants = ['Неужели','Ваше число','Хм... Кажеться','Возможно', 'Я почти уверен что'];
    questionRandom = Math.floor(Math.random()*questionVariants.length);
    question=questionVariants[questionRandom];
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${question}`+` ${answerNumber}?`;
        }
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    questionVariants = ['Неужели','Ваше число','Хм... Кажеться','Возможно', 'Я почти уверен что'];
    questionRandom = Math.floor(Math.random()*questionVariants.length);
    question=questionVariants[questionRandom];
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${question}`+` ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let answerVariants=[`Я всегда угадываю`,`Кто тут Ванга?`,`Мастер телепатии`,`Повторим?`];
        let answerRandom=Math.floor(Math.random()*answerVariants.length);
        let answer=answerVariants[answerRandom];
        answerField.innerText = `${answer}\n\u{1F60E}`
        gameRun = false;
    }
})

