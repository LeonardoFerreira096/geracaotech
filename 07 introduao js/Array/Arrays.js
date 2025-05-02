// **`Parte 1:`**

// Você foi contratado(a) para desenvolver pequenas funcionalidades interativas para um sistema simples utilizando JavaScript. 
// Para isso, você precisará manipular listas de itens (arrays) dinamicamente, permitindo que o usuário interaja através de prompts e 
// visualizando os resultados com alertas.

// **Instruções:**

// Para cada um dos cenários descritos abaixo, escreva um código JavaScript que utilize 
// os métodos de array `push()`, `pop()`, `shift()` e `unshift().`

// **Cenário 1: Gerenciamento de Tarefas**
// Desenvolva um script que permita ao usuário criar uma lista de tarefas. 
// O usuário deve ser capaz de adicionar múltiplas tarefas ao final da lista 
// até decidir parar. Ao final da adição, a lista completa de tarefas deve ser exibida.
//  Em seguida, o script deve perguntar se o usuário deseja remover a primeira tarefa da lista, 
//  realizando a remoção (se houver tarefas) e mostrando a lista atualizada, ou informando que não há tarefas a serem removidas.


let tarefas = ""
let listatarefas = []

do {
    tarefas = (prompt('Qual foi a tarefa realizada? para sair digite 0 '))

    if (tarefas !== '0' && tarefas !== '') {
        alert('Foi adicionado uma nova tarefa ' + tarefas)
        listatarefas.push(tarefas)
    }

} while (tarefas !== '0');
console.log(listatarefas)

// Cenário 2: Simulação de Fila de Atendimento

alert(listatarefas)

let remocao = prompt('Deseja remover o primeiro item da lista? sim ou nao?')

while (remocao === 'sim' && listatarefas.length > 0) {
    listatarefas.shift()

    if (listatarefas.length == 0) {
        alert('voce nao possui mais tarefas para excluir')
    } else {
        alert(listatarefas)
        remocao = prompt('Deseja remover o primeiro item da lista? sim ou nao?')
    }

}










