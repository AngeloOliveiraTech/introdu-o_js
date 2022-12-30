//Esta variável tem o span, vindo pelo ID do HTML (PEGA O VALOR=0)
//Pega o valor do texto, primeira execução é 0, depois varia conforme as execuções, para no final ser o valor desejado
var currentNumberSpan = document.getElementById('currentNumber');
var currentNumber = 0; //Nao ficar só no HTML

function increment(){
     currentNumber = currentNumber + 1;
     currentNumberSpan.innerHTML = currentNumber;
}

function decrement(){
     currentNumber = currentNumber - 1;
     currentNumberSpan.innerHTML = currentNumber;
}