//console.log("Hello World!");
//Node para executar o arquivo via Server

//Retorna todos os valores Pares de um array de entrada
function returnEvenValues(array) {
     let evenNums = []; //Cria o Array de saída
     //ler o array de fora com valorea pré-definidos
     for(let i = 0; i < array.length; i++){
          if(array[i] % 2 === 0){
               evenNums.push(array[i]);//PUSH adiciona valores no Array
          }else{
               console.log(`${array[i]} não é par`);
               //estudar sintaxe, seria a volta dos dados
          }
     }
     console.log("Os Números pares são: ",evenNums);//Mostra variável de saída
}

let array = [1,2,4,5,7,8];// retorna 2,4 e 8

returnEvenValues(array);//Entre parênteses o argumento 