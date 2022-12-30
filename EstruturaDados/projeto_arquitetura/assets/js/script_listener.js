document.getElementsByName("adicionar")[0].addEventListener("click", increment);

document.getElementsByName("subtrair")[0].addEventListener("click", decrement);

var currentNumberSpan = document.getElementById('currentNumber');
var currentNumber = 0; 

function increment(){
     currentNumber = currentNumber + 1;
     currentNumberSpan.innerHTML = currentNumber;
     negativo();
     desabilitar(0);
}

function decrement(){
     currentNumber = currentNumber - 1;
     currentNumberSpan.innerHTML = currentNumber;
     negativo();
     desabilitar();
}

function negativo(){
     if(currentNumber < 0){
          currentNumberSpan.style.color = 'red';
     }else{
          currentNumberSpan.style.color = 'black';
     }
}

function desabilitar(){
     if(currentNumber == 10){

          document.getElementsByName("adicionar")[0].setAttribute("disabled", "disabled");

     }else if(currentNumber == -10){

          document.getElementsByName("subtrair")[0].setAttribute("disabled", "disabled");

     }
}

//Botão tem que ser desabilitado após chegar no valor requisitado.
