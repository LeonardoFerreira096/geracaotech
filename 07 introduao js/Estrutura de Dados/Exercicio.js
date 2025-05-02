//1. Declare uma variável contendo uma string
let pComida = 'Churrasco'
console.log(pComida)

//2. Declare uma variável contendo um número dentro de uma string
let pNumero = '50'
console.log(pNumero)

//3. Declare uma variável com a sua idade
let pIdade = 28
console.log(pIdade)

//4. Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
const pNome = 'Leonardo'
const pSobreNome = ' Costa Ferreira'
const pNomeCompleto = pNome + '' + pSobreNome

console.log(pNomeCompleto)

//5. Coloque a seguinte frase em uma variável: 
let frase = "Você está aprendendo JavaScript!"

console.log(frase)

//6. Verifique o tipo da variável que contém o seu nome

console.log(typeof(pNome))

//7. Declare as seguintes variáveis:

let nome = "Leonardo";
let sobrenome = " Costa Ferreira";
let idade = 28;
let cidade = "Fortaleza";
let profissao = "Desenvolvedor";

//Tarefa 1: Crie uma frase que combine todas essas informações usando o 
//operador + para concatenar as strings e as variáveis. O resultado esperado é algo como: "Meu nome completo é Carlos Silva, tenho 30 anos, moro em Fortaleza e sou Desenvolvedor."

let MeApresentando = 'Meu nome completo é ' + nome + ' ' + sobrenome +', tenho ' + idade + ' Anos,' + ' moro em ' + cidade +' e sou ' + profissao + '.'
console.log(MeApresentando)


//Tarefa 2: Agora, tente criar uma mensagem mais elaborada, incluindo algumas
//pontuações e palavras extras: "Olá! Meu nome é Carlos Silva e tenho 30 anos. 
//Atualmente, trabalho como Desenvolvedor na bela cidade de Fortaleza."

let Apresentacao2 = 'Olá! Meu nome é ' + nome + ' ' + sobrenome +', e tenho ' + idade + ' Anos.' + ' Atualmente, trabalho como ' + profissao + ' na bela cidade de ' + cidade +'.' 

console.log(Apresentacao2)