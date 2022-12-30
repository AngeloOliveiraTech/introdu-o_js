//Inicializar array
var nomeArray = []; //Inicializa o array, porém n fala o tamanho

//Adicionar um item, no final do index, dentro dos parênteses é o item NÃO A POSIÇÃO
nomeArray.push(3);
nomeArray.push(4);

//Acima é um array com 2 index nomeArray = {3,4}

nomeArray.pop();//Retira o elemnto do final do Array
nomeArray.shift();//Retira o primeiro elemento do Array

for(let i =0 ;i < nomeArray.length; i++){
     console.log(nomeArray[i]);
}