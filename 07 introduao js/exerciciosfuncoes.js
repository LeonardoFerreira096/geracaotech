// 1.Desenvolva uma função chamada verificarMaiorIdade que 
// recebe uma idade como argumento e retorna “é maior de idade” se 
// a pessoa for maior de idade (18 anos ou mais) e “é menor de idade” caso contrário.

// let idade = prompt('Qual sua Idade?')

// function verificarMaiorIdade(idade) {

//     if (idade >= '18') {

//     } else {
//         console.log(`Tu é de menor, ${idade}`)
//     }


// }

// verificarMaiorIdade(idade)


// // 2.Crie um programa que receba a quantidade total de alunos e 
// // a quantidade dos que estão presentes e mostre a quantidade de alunos faltantes

// let alunosTotal = parseInt(prompt('Qual a quantidade de alunos'))
// let alunospresentes = parseInt(prompt('Quanto alunos presentes'))

// const alunosfaltantes = (param1, param2) => {
//     let faltantes = param1 - param2
//     return faltantes
// }


// 3.Com o que aprendemos, crie uma função que retorne todos 
// os números pares deste array [1,2,3,4,5,6,7,8,9,10]



// 4. Crie uma função `contagemRegressiva` que receba um número e 
// mostre no console a contagem de forma decrescente até 0.

const numero = Number(prompt('digite um numero'))

function contagemRegressiva(numero){
    for ( let i = numero; i > 0; i--) {
        console.log(i)

    }
}

contagemRegressiva(numero)