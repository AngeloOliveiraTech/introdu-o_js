let textoQualquer = "algumaCoisa"; //camelCase primero minúsculo e restante minúsculo. | Escopo de bloco | 
var numero= 12540; // mesmo formato; | Escopo Global | Roisting (sem tipar)

const MY_NUMBER_ID = 48474647886; // Não muda, igual, tudo em letra maiúscula, separados por underline.

//Concatenção com variáveis
var timeComMundial = 'Corinthians';
var timeSemMundial = 'Palmeiras';
var fifa = `Este tem 2 mundiais: ${timeComMundial}`;//Forma correta e ideal

//método concat
var concatenado = timeSemMundial.concat(timeComMundial); //Método Padrão
var concatenado = timeSemMundial + " é pior que o " + timeComMundial;//Gambi

function testeEs6(){
     concatenado = `${timeComMundial} é melhor que este time, o ${timeSemMundial}`;
     return concatenado;
}
console.log(testeEs6());
//Saber por índice String

var igreja = "Maranata";
//console.log(igreja[0]); //Retorna M


//console.log(typeof numero); // Mostra o formato da variável (String,Int, Double...)