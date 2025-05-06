const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const booksContainer = document.getElementById('booksContainer')

searchButton.addEventListener('click', (Event) => {
    Event.preventDefault()
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    fetchBooks(query)
})

function fetchBooks(query) {
    const Livros = [
        {
            img: './imags/a.jpg',
            titulo: 'Batman Animate',
            categoria: 'Ação',
            preco: 69.99,
            desconto: true
        },
        {
            img: './imags/612qUTVvMpL._AC_UY327_QL65_.jpg',
            titulo: 'Batman e Bane',
            categoria: 'Fantasia',
            preco: 69.99,
            desconto: true
        },
        {
            img: './imags/a.jpg',
            titulo: 'Batman x Coringa',
            categoria: 'Terro',
            preco: 69.99,
            desconto: false
        },
        {
            img: './imags/71v7OtJaipL._AC_UY327_QL65_.jpg',
            titulo: 'Batman Hust',
            categoria: 'Suspense',
            preco: 69.99,
            desconto: true
        },
        {
            img: './imags/71XDl6Q6SrL._AC_UY327_QL65_.jpg',
            titulo: 'Batman Piada Mortal',
            categoria: 'Animação',
            preco: 69.99,
            desconto: true
        },
        {
            img: './imags/91u+ZenXzKL._AC_UY327_QL65_.jpg',
            titulo: 'Batman e Coringa Dupla fatal',
            categoria: 'Terror Psicologico',
            preco: 69.99,
            desconto: false
        }
    ]

    const livrosFiltrados = Livros.filter(item =>
        item.titulo.toLowerCase().includes(query) ||
        item.categoria.toLowerCase().includes(query)
    )

    if (livrosFiltrados.length === 0) {
        booksContainer.innerHTML = "<h1> Nenhum livro encontrado</h1>"
        return
    }

    booksContainer.innerHTML = livrosFiltrados.map(item => {
        return `<div class="div-card">
                <div class="div-img">
                    <img src="${item.img}" alt="capa do livro">
                    <p class="tag-p">Frete Grátis</p>
                </div>
                    <div class="div-titulo">
                        <h1>${item.titulo}</h1>
                        <button>+</button>
                    </div>
                    <h2><a href="">${item.categoria}</a></h2>
                    <p>${item.preco}</p>
                </div>
              </div>  
                
                `

    }).join(" ")
}
