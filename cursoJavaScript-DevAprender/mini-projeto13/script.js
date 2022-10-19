// JavaScript - Objeto Postagem de Blog (Exercício)

// Crie neste exercício um objeto de postagem de blog
// que vai conter as seguinte propriedades

// Postagem
/*
    titulo
    mensagem
    autor
    vizualizacoes
    comentarios
        (autor, mensagem)
    estaAoVivo
*/

let postagem = {
    titulo: 'titulo da postagem',
    mensagem: 'menagem da postagem',
    autor: 'autor da postagem',
    visualizacoes: 5300,
    comentarios: [
        {
            autor: 'autor do comentário A', 
            mensagem: 'mensagem do comentário A'
        },
        {
            autor: 'autor do comentário B', 
            mensagem: 'mensagem do comentário B'
        }
    ],
    estaAoVivo: true
}

console.log(postagem)
