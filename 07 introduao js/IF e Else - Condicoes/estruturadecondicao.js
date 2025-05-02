const numero = Number(prompt('Digite seu numero'))

if(numero % 2 === 0){
    alert('É par')
} else{
    alert('É impar')
}    


numero % 2 === 0 ? alert('É par') : alert('É ímpar')


Bom-dia

const turno = prompt('Digite manhã, tarde ou noite')

if (turno === 'manhã'){
    alert('bom dia!')
} else if (turno === 'tarde') {
   alert('boa tarde!')
} else {
    alert('boa noite!')
}


// const opcao = Number(prompt('Digite 1 para ver perfil, 2 para editar e 3 para sair'))

// switch(opcao){
//     case'1':
//     alert('Você escolher ver perfil')// bloco de construcao
//     break
//     case'2':
//     alert('Você escolheu editar perfil')// bloco de construcao
//     break
//     case'3':
//     alert('Você escolheu sair')// bloco de construcao
//     break
//     default:
//     alert('Escolheu opção invalida')

// }
