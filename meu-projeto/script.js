function identificarTriangulo() {
    // Usando let para declarar as variáveis
    let lado1 = parseFloat(document.getElementById('lado1').value);
    let lado2 = parseFloat(document.getElementById('lado2').value);
    let lado3 = parseFloat(document.getElementById('lado3').value);
    
    // Verifica se os lados são válidos (números positivos)
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        // Exibe a mensagem de erro na própria página
        document.getElementById('resultado').textContent = "Por favor, insira todos os lados corretamente (números positivos).";
        return;
    }

    // Verifica se a soma de dois lados é maior que o terceiro (condição para ser um triângulo válido)
    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        document.getElementById('resultado').textContent = "Esses valores não formam um triângulo válido.";
        return;
    }

    // Identificar o tipo de triângulo com base nos lados
    if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById('resultado').textContent = "Triângulo Equilátero (Todos os lados são iguais).";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById('resultado').textContent = "Triângulo Isósceles (Dois lados iguais).";
    } else {
        document.getElementById('resultado').textContent = "Triângulo Escaleno (Todos os lados diferentes).";
    }
}