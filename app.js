/*Variáveis*/
var nome = 'Lucas'
let sobrenome = 'Brandao' /*vamos utilizar essa forma*/
nomedomeio = 'Santos'

let n1 = 2
let n2 = 9.5
let comida = 'maçã'
let fumante = false

console.log(n1, n2, comida, fumante)

/*Tipos de dados*/
console.log(typeof n1) /* 2 é number*/
console.log(typeof n2) /* 9.5 é number*/
console.log(typeof comida) /*'maçã é string*/
console.log(typeof fumante) /* false é boolean*/

let veiculos = ['carro,moto,avião']/*array*/
console.log(typeof veiculos); /* todo array é tipo object em js*/
let salvar = function() { }
console.log(typeof salvar)/*salvar é tipo function*/

/*Estrutura de decisão*/
/*if (condição){valor se a condição for verdadeiro}
else{valor se a condição for falso}*/
let nota = 10
if (nota >=5){ /*if mais visto, com else*/
console.log("Passou")
}
else {
    console.log("Reprovou")
}

if(nota >=5) {console.log("Parabéns, está aprovado")}/* if sem else*/

 if (nota >=7){console.log("Aprovado")//if com + condições//
 console.log("Aprovado")
}
else if(nota >=5) {
    console.log("Recuperação")
} 
else {console.log("Reprovado")}

let dia = 7
switch (dia){
    case 1:
        console.log("Domingo")
        break
     case 1:
        console.log("Segunda")
        break 
    case 1:
        console.log("Terça")
        break
    case 1:
         console.log("Quarta")
         break
    case 1:
         console.log("Quinta")
         break 
    case 1:
         console.log("Sexta")
         break
    case 1:
        console.log("Sabado")
        break
    default :
        console.log("Dia inválido")
        break
}

/*estrutura de repetição*/
let contador = 1 
while(contador <=10){
    console.log(contador)
    contador++ //contador = contador + 1
}
for(let contador2 = 10; contador2<=20; contador2++ ){
    console.log(contador2)
}
/*
while (condição) 
{codigo de laço de repetição}
for (inicialização ; condição; incremento){
    código de laço de repetição
}*/



