function checarSeTemCaracteresMaiusculos() { 
  
let regexParaTest = /[A-Z]/

let userInput = prompt("");
  
let retorno = "";

if(regexParaTest.test(userInput) === true ){

  alert("Existe caracteres maiúsculos");
  
  for(i=0; i < userInput.length; i++){
    if(userInput[i].match(regexParaTest)){
       retorno += userInput[i];
    }
  }

console.log("O que foi escrito foi isso: " + userInput);
console.log("O maiúsculo foi esse: " + retorno);  
}
  
 else{
  alert("Não existem caracteres maiusculos");
  console.log("O que foi escrito foi isso: " + userInput);
}
  
  }

checarSeTemCaracteresMaiusculos();
