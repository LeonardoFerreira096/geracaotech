//Exercício 1: Cálculo de Desconto**
//Crie um programa que solicite o valor total de uma compra. Se o valor for maior que R$100, aplique um desconto de 10%. Exiba o valor final da compra com ou sem desconto.
// const valortotal = Number(prompt('Digite o valor da total da sua compra'))

// if(valortotal > 100){
//     let desconto = 0.9
//     let valorFinal = valortotal * desconto
//     alert('O valor total ficou ' + valorFinal)
// } else{
//     alert('O valor ficou ' + valortotal)
// }



//Exercício 2: Verificação de Elegibilidade para Dirigir

//Crie um programa para verificar se a pessoa tem mais de 18 anos e possui habilitação, caso contrário, não poderá dirigir.

// const idade = Number(prompt('Quantos anos voce tem?'))
// const possuiHabilitacao = Number(prompt('Possui Habilitação? coloque 1 para sim ou 2 para nao.'))

// if(idade >= 18 && possuiHabilitacao === 1){
//     alert('Pode dirigir')
// } else{
//     alert('Não pode dirigir')
// }



// **Exercício 3: Cálculo de Média**

//Desenvolva um programa em JavaScript que receba 3 notas de um aluno (nota 1 e nota 2 e nota 3). 
// O programa deverá calcular a média dessas três notas. Com base na média,
//  o programa deve exibir uma mensagem informando se o aluno 
// foi "Aprovado" (média maior ou igual a 7) ou "Reprovado" (média menor que 7).

// Requisitos:

// 1. O programa deve solicitar ao usuário que insira as três notas do aluno.
// 2. As notas inseridas devem ser armazenadas em variáveis.
// let nota1 = Number(prompt('Digite a primeira nota'))
// let nota2 = Number(prompt('Digite a primeira nota'))
// let nota3 = Number(prompt('Digite a primeira nota'))
// // 3. O programa deve calcular a média das três notas.
// let media = (nota1 + nota2 + nota3) / 3
// // 4. Utilize uma estrutura condicional para verificar se a média é maior ou igual a 7.
// // 5. Se a média for maior ou igual a 7, exiba a mensagem: "Aprovado".
// // 6. Caso contrário (média menor que 7), exiba a mensagem: "Reprovado".
// // 7. O programa deve exibir a média calculada junto com a mensagem de aprovação ou reprovação.

// if(media > 7 && media <= 10){
//     alert('Aprovado')
// } else if (media <= 7 && media >= 4){
//     alert('Recuperação')
// } else if (media < 4){
//     alert('Reprovado')
// } else {
//     alert('Digite um numero válido')
// }


// **Exercício 4: Dia da Semana**

// Utilize uma estrutura de condição para receber um número de 1 a 7 e 
// exibir o dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.). Inclua um caso `default` para números inválidos.

let diaSemana = Number(prompt('Digite um numero'))

switch (diaSemana) {
    case 1:
        alert('Domingo')
        break;
    case 2:
        alert('Segunda')
        break;
    case 3:
        alert('Terça')
        break;
    case 4:
        alert('Quarta')
        break;
    case 5:
        alert('Quinta')
        break;
    case 6:
        alert('Sexta')
        break;
    case 7:
        alert('Sábado')

}