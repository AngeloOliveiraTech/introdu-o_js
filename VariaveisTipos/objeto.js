//Objeto é um conjunto de elementos.
//let objeto = {name:"Angelo", age: 20}

let sistemaTV = {
     marca:"BlackMagicDesign",
     modelo:"URSA",
     formt: 16.9
}

console.log(sistemaTV.marca); //Para chamar um objeto é nomeObjeto.nomeChave

//Mudar uma chave dentro do objeto
sistemaTV.marca = "SONY";
console.log(sistemaTV.marca);

//Biblioteca JAVAScript (tipo docs..ele.)
console.log(Object.values(sistemaTV)); //Ver valores

console.log(Object.keys(sistemaTV)); //Ver chaves do objeto