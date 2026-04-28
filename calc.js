const prompt = require('prompt-sync')();

let continuar = true;

// definindo operaçoes que a calculadora vai ter
const somar = (a, b) => a + b //soma
const subtrair = (a, b) => a - b //subtracao
const multiplicar = (a, b) => a * b //multiplicacao
const dividir = (a, b) =>  a / b //divisao

//funcao menu da calculadora
function menu(){
    console.log("calculadora de henry")
    console.log("1-soma")
    console.log("2-subtracao")
    console.log("3-multiplicacao")
    console.log("4-divisao")
    console.log("5-sair")
}

//funcao pra executar a calculadora
function executarCalculadora(){
    let continuar = true

    while(continuar){
        menu() // <--- AQUI: mudei de exibirMenu para menu pra bater com o nome da sua funcao
        let opcao = prompt("oque voce deseja fazer?")

        //opcao de sair
        if (opcao === '5') {
            console.log("Encerrando a calculadora. Até mais!");
            continuar = false;
            break;
        }

        //isso faz o usuario só escolher as opcoes que estao no menu, se nao tiver aparece a mensagem de erro
        if (opcao !== '1' && opcao !== '2' && opcao !== '3' && opcao !== '4') {
            console.log("opcao invalida");
            continue;
        }

        //pergunta ao usuario os dois numeros
        let n1 = Number(prompt("digite o primeiro numero: "));
        let n2 = Number(prompt("digite o segundo numero: "));

        //isso controla o usuario digitar so numeros e nao caracteres
        if (isNaN(n1) || isNaN(n2)) {
            console.log("erro, digite apenas numeros");
            continue;
        }

        //faz a conta e mostra o resultado usando as funcoes criadas a cima
        let resultado;
        switch (opcao) {
            case '1': resultado = somar(n1, n2); break;
            case '2': resultado = subtrair(n1, n2); break;
            case '3': resultado = multiplicar(n1, n2); break;
            case '4': resultado = dividir(n1, n2); break;
        }

        //resultado da conta
        console.log("\n=> resultado da sua conta: ", resultado);
        prompt("\nclique em enter para continuar");
    }
}
//faz a calculadora rodar quando digitado no terminal "calc.js"
executarCalculadora();