/*
Além das Estruturas de Controle convencionais como IF/ELSE, Switch/Case, For, While, Do/While.
O JavaScript possui o For/In.
*/

const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 10]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Gustavo",
    sobrenome: "Rautenberg",
    idade: 19,
    peso: 70
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}