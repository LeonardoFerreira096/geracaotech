const tabelaItens = document.getElementById('tabela-produtos')


const produtos = [
    {
        img: "./man-united.webp",
        nome: "Camiseta",
        desc: "Camiseta",
        preco: 49.90,
        frete: true

    }, 
    {
        img: "./sapato.webp",
        nome: "Tênis",
        desc: "Tênis de Corrida",
        preco: 199.90,
        frete: false

    }, 
    {
        img: "./calsa.webp",
        nome: "Calça Jeans",
        desc: "Calça jeans Azul",
        preco: 120.00,
        frete: true

    },
    {
        img: "./calsa.webp",
        nome: "Calça Jeans",
        desc: "Calça jeans azul",
        preco: 120.00,
        frete: true

    },
    {
        img: "./sapato.webp",
        nome: "Tênis",
        desc: "Tênis de corrida",
        preco: 199.90,
        frete: false

    },
    {
        img: "./sapato.webp",
        nome: "Tênis",
        desc: "Tênis de corrida",
        preco: 199.90,
        frete: false

    }
]

tabelaItens.innerHTML = produtos.map((produto,index)=>{
    return `
        <tr key=${index} class="border-t border-gray-200 hover:bg-gray-200">
            <td><img class="w-20 p-2" src=${produto.img} alt=${produto.desc}></td>
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco}</td>
            ${produto.frete ? '<td class="text-green-600 font-medium">Sim</td>' : '<td class="text-red-600 font-medium">Não</td>' }
            
        </tr>
    `
    
}).join("")