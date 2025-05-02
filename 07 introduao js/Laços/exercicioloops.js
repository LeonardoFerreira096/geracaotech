// // 1. Ler o preço de um produto e a cor da sua etiqueta


// let coretiqueta = (prompt('Qual a cor da Etiqueta')).toLowerCase


// while(coretiqueta != 'verde' || coretiqueta != 'Amarelo' || coretiqueta != 'azul' || coretiqueta != 'vermelho' ){

// }

// const preco = Number(prompt('Qual o valor?'))
// let desconto

// switch (coretiqueta) {
//     case 'verde':
//         desconto = 0.1
//         break
//     case 'Amarelo':
//         desconto = 0.2
//         break
//     case 'Azul':
//         desconto = 0.3
//         break
//     case 'Vermelho':
//         desconto = 0.4
//         break
//     default:
//         alert('a cor dessa etiqueta nao existe')
// }

// let valorDescontado = preco - (preco * desconto)

// let resposta = alert(`O valor total é ${preco} e com desconto ficou ${valorDescontado}`)

// 2. Crie um programa que peça ao usuário para digitar uma senha. 
// Continue pedindo a senha até que o usuário digite "1234". 
// Use um laço do…while para controlar as tentativas e, quando a senha correta for inserida, 
// exiba a mensagem "Acesso Permitido".

// do {
//     senha = (prompt('Digite sua senha'))
// } while (senha !== '1234')

// alert('acesso permitido')

    
// 3.Você precisa criar um programa que ajude a calcular a média de notas de uma turma. 
// O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar 
// a nota de cada aluno. Utilize um laço for para capturar as notas e acumular a soma. Após inserir todas as notas, 
// o programa deve calcular e exibir a média da turma.

// let alunos = parseInt(prompt('Digite a quantidade de alunos'))
// let notas = 0

// for (let index = 1; index <= alunos; index++){
// notas += parseFloat(prompt('Digite a nota'))
// }

// const media = notas/alunos

// alert(`A média do alunos é  ${media}$`)

// 4.Você é responsável por calcular o total das vendas do dia para uma pequena loja. 
// Escreva um programa que peça ao usuário o valor de cada venda, uma por vez. Use um laço de repetição para capturar 
// esses valores e adicione-os a um total acumulado. O programa deve continuar pedindo valores até que o usuário insira "0" (para finalizar). 
// Ao final, exiba o total de vendas do dia

// let valorVenda = 0
// let totalAcumulado = 0

// do {
//     let valorVenda = parseFloat(prompt('Gigite o valor da venda ou 0 para sair'))
//      totalAcumulado += valorVenda
//     alert(totalAcumulado)
// } while (valorVenda !== 0);
