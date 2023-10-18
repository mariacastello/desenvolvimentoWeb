const primeiroValor = 6;
let segundoValor = "loja";
const listaValores = ['loja', 'abacaxi', 2];
let quartaVariavel;

console.log(primeiroValor + 1 + ": primeiro valor");

segundoValor += "rosa";
console.log(segundoValor + ": segundo valor");

console.log("Lista de valores: " + listaValores);
console.log("Tamanho da lista: " + listaValores.length);
console.log("Primeiro item da lista: " + listaValores[0]);
console.log("Adicionando 'blusa' à lista. Novo tamanho: " + listaValores.push('blusa'));
console.log("Lista atualizada: " + listaValores);
console.log("Substituindo o item na posição 3 com 'bolsa'. Lista atualizada: " + (listaValores[3] = 'bolsa'));
console.log("Atualizando o item na posição 15 com 'maçã'. Lista atualizada: " + (listaValores[15] = 'maçã'));
console.log("Lista final: " + listaValores);

quartaVariavel = { primeiro: 1, segundo: "tudo" };
console.log("Quarta variável: " + quartaVariavel);
console.log("Valor da propriedade 'primeiro' da quarta variável: " + quartaVariavel.primeiro);
quartaVariavel.terceiro = "nada";
console.log("Valor da propriedade 'terceiro' da quarta variável: " + quartaVariavel.terceiro);

function minhaFuncao(entrada) {
  return entrada + 2;
}

console.log(minhaFuncao(6));
console.log(minhaFuncao('1'));

const minhaOutraFuncao = function (entrada) {
  return entrada + 3;
}

console.log(minhaOutraFuncao(6));
console.log(minhaOutraFuncao('1'));

const seta = (entrada) => {
  return entrada + 4;
}

console.log(seta(6));
console.log(seta('1'));

const outraSeta = (entrada) => entrada + 5;

console.log(outraSeta(6));
console.log(outraSeta('1'));
