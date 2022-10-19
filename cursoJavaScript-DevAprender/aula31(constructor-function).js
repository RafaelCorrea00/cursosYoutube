// Constructor Function (Exercício)

// Criar um objeto postagem
// titulo, mensagem, autor, visualizações, comentarios, estaaovivo

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor
    this.visualizacoes = 0
    this.comentario = []
    this.estaAoVivo = false
}

let postagem = new Postagem(
    'titulo da postagem',
    'mensagem da postagem',
    'autor da postagem'
)
console.log(postagem)
