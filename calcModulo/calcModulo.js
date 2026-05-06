// arquivo - calcModulo.js - menu da calculadora

const prompt = require('prompt-sync')();

// importando cada módulo
const soma = require('./soma');
const subtracao = require('./subtracao');
const multiplicacao = require('./multiplicacao');
const divisao = require('./divisao');

//funcao menu da calculadora
function menu(){
    console.log("\n--calculadora de henry--")
    console.log("1-soma")
    console.log("2-subtracao")
    console.log("3-multiplicacao")
    console.log("4-divisao")
    console.log("5-sair")
}
// parte funcional do menu
function executarCalculadora() {
    let continuar = true;

    while (continuar) {
        menu();
        let opcao = prompt("o que voce deseja fazer? ");

        if (opcao === '5') {
            console.log("fechando a calculadora");
            continuar = false;
            break;
        }

        if (!['1', '2', '3', '4'].includes(opcao)) {
            console.log("opcao invalida");
            continue;
        }

        let n1 = Number(prompt("digite o primeiro numero: "));
        let n2 = Number(prompt("digite o segundo numero: "));

        if (isNaN(n1) || isNaN(n2)) {
            console.log("erro, digite apenas numeros");
            continue;
        }

        let resultado;
        
        // Chamando as funções importadas diretamente
        switch (opcao) {
            case '1': resultado = soma(n1, n2); break;
            case '2': resultado = subtracao(n1, n2); break;
            case '3': resultado = multiplicacao(n1, n2); break;
            case '4': resultado = divisao(n1, n2); break;
        }

        console.log("\n resultado da conta: ", resultado);
    }
}

executarCalculadora();