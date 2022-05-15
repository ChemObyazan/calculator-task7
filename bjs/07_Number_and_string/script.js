let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function() {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.querySelector('#btn_1').addEventListener('click',function(){
    inputWindow.value += 1;})

document.querySelector('#btn_2').addEventListener('click',function(){
    inputWindow.value += 2;})

document.querySelector('#btn_3').addEventListener('click',function(){
    inputWindow.value += 3;})

document.querySelector('#btn_plus').addEventListener('click',function(){
    lastOperand = 0;
    operation = 'sum';
})

document.querySelector('#btn_4').addEventListener('click',function(){
    inputWindow.value += 4;})

document.querySelector('#btn_5').addEventListener('click',function(){
    inputWindow.value += 5;})

document.querySelector('#btn_6').addEventListener('click',function(){
    inputWindow.value += 6;})

document.querySelector('#btn_minus').addEventListener('click',function(){
    lastOperand = 0;
    operation = 'sum';
})