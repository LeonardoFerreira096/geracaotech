// 1. Ler o preço de um produto e a cor da sua etiqueta


let coretiqueta = (prompt('Qual a cor da Etiqueta')).toLowerCase


while(coretiqueta != 'verde' || coretiqueta != 'Amarelo' || coretiqueta != 'azul' || coretiqueta != 'vermelho' ){
   
}

const preco = Number(prompt('Qual o valor?'))
let desconto

switch (coretiqueta) {
    case 'verde':
        desconto = 0.1
        break
    case 'Amarelo':
        desconto = 0.2
        break
    case 'Azul':
        desconto = 0.3
        break
    case 'Vermelho':
        desconto = 0.4
        break
    default:
        alert('a cor dessa etiqueta nao existe')
}

let valorDescontado = preco - (preco * desconto)

let resposta = alert(`O valor total é ${preco} e com desconto ficou ${valorDescontado}`)

