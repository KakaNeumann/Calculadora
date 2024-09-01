// script.js

let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let valorAtual = '';
let valorAnterior = '';
let operacao = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'clear':
                valorAtual = '';
                valorAnterior = '';
                operacao = '';
                display.value = '';
                break;
            case 'backspace':
                valorAtual = valorAtual.slice(0, -1);
                display.value = valorAtual;
                break;
            case 'dividir':
            case 'multiplicar':
            case 'subtrair':
            case 'adicionar':
                operacao = button.id;
                valorAnterior = valorAtual;
                valorAtual = '';
                break;
            case 'igual':
                if (operacao === 'dividir') {
                    valorAtual = parseFloat(valorAnterior) / parseFloat(valorAtual);
                } else if (operacao === 'multiplicar') {
                    valorAtual = parseFloat(valorAnterior) * parseFloat(valorAtual);
                } else if (operacao === 'subtrair') {
                    valorAtual = parseFloat(valorAnterior) - parseFloat(valorAtual);
                } else if (operacao === 'adicionar') {
                    valorAtual = parseFloat(valorAnterior) + parseFloat(valorAtual);
                }
                display.value = valorAtual;
                valorAnterior = '';
                operacao = '';
                break;
            default:
                valorAtual += button.id;
                display.value = valorAtual;
        }
    });
});