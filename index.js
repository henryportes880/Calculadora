const prompt = require('prompt-sync')();

// 1. Funções de Operações Matemáticas
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? "Erro: Divisão por zero!" : a / b;

// 2. Função para exibir o menu
function exibirMenu() {
    console.log("\n=========================");
    console.log("      CALCULADORA        ");
    console.log("=========================");
    console.log("1. Soma (+)");
    console.log("2. Subtração (-)");
    console.log("3. Multiplicação (*)");
    console.log("4. Divisão (/)");
    console.log("0. Sair");
    console.log("=========================");
}

// 3. Função principal que gerencia o fluxo
function executarCalculadora() {
    let continuar = true;

    while (continuar) {
        exibirMenu();
        let opcao = prompt("Escolha a operação desejada: ");

        if (opcao === '0') {
            console.log("Encerrando a calculadora. Até mais!");
            continuar = false;
            break;
        }

        if (!['1', '2', '3', '4'].includes(opcao)) {
            console.log("Opção inválida!");
            continue;
        }

        let num1 = Number(prompt("Digite o primeiro número: "));
        let num2 = Number(prompt("Digite o segundo número: "));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Erro: Digite números válidos!");
            continue;
        }

        // Processa o resultado usando as funções criadas
        let resultado;
        switch (opcao) {
            case '1': resultado = somar(num1, num2); break;
            case '2': resultado = subtrair(num1, num2); break;
            case '3': resultado = multiplicar(num1, num2); break;
            case '4': resultado = dividir(num1, num2); break;
        }

        console.log(`\n=> RESULTADO: ${resultado}`);
        prompt("\nPressione ENTER para continuar...");
    }
}

// Inicia o programa
executarCalculadora();