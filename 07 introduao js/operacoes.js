//Soma
//Subtração
//Multiplicação
//Divisão

let numero1 = Number(prompt('Digite um numero'))
let numero2 = Number(prompt('Digite um numero'))

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log(`A soma é ${soma}, a subtração é ${subtracao}, a multiplicão é ${multiplicacao} e a divisão é ${divisao}`)


let outrasoma = '20' + 2 //concatenacao output->'202'
let outrasubtracao = '20' - 2 // a subtracao ela ocorre nos outros casos, nao para soma


let dado = 'alguma informacao'

let x = 5
console.log(x)
x = x + 5 // resposta 10
console.log(x)
x += 5 // resposta 15
console.log(x)

//operadores de comparação (>, <, >=, <=, ==, !=, ===, !==) retono booleano (true ou false)
console.log(3>6) // False
console.log(10>4) // True
console.log(10*6 >= 30/3) // True
console.log(2=='2') // True
console.log(2==='2') // False
console.log(2!=='2') // True

// operadores lógicos (&&, ||, !)

console.log(10 == 1 && 20 != 5) // as duas condicoes verdadeiras
console.log(20 == 20 && 3 < 10) //
console.log(10 === '10' || 20 > 5) //true

let z = 10
let y = 20

let comparacao = z > y // false
console.log(!!comparacao) //falsy

//truthy e falsy