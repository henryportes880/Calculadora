const prompt = require('prompt-sync')();

console.log("--- Bem-vindo à Calculadora ---");

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

console.log(`A soma é: ${num1 + num2}`);