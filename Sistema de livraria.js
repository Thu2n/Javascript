/*Crie um sistema simples para gerenciar o estoque de uma livraria. O sistema deve permitir adicionar livros 
ao estoque, remover livros, atualizar a quantidade de livros e listar todos os livros disponíveis.
Passos:
1 - Defina um array de objetos para armazenar os livros no estoque.
   * Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.
  2 - Crie funções para gerenciar o estoque:
  * adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.
  * removerLivro(titulo) - Remove um livro do estoque pelo título.
  * atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.
  * listarLivros() - Lista todos os livros no estoque.
3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.
4 - Use laços de repetição para iterar sobre o array de livros quando necessário.*/''


const estoque = [
    {id: 2035, titulo: 'Harry Potter', autor:'J. K. Rowling', quantidade: 12},
    {id: 2123, titulo: 'A menina que roubava livros',autor:'Michael Petroni', quantidade: 15},
    {id: 2985, titulo: 'A arvore que dava dinheiro',autor:'Domingos Pellegrini', quantidade: 17},
    {id: 2305, titulo: 'Hábitos atomicos',autor:'James Clear', quantidade: 20},
]


 const adicionaLivro = (id, titulo, autor, quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade
    })
 }

 adicionaLivro(3456, 'Nada pode me ferir', 'James Clear', 15 );
 console.log(estoque);



const removeLivro = (idDoLivro) => {
    const existeIdNoEstoque = !!estoque.includesfind(Livro => livro.id === idDoLivro)
    console.log('existe?', existeIdNoEstoque)
    if(existeIdNoEstoque) {
        for(let indice = 0; indice < estoque.length; indice++) {
            if(estoque[indice].id === idDoLivro) {
                estoque.splice(indice, 1)
                console.log('O livro de id ${idDoLivro} foi removido');
                break;
            }
        }
    }
    else
    console.log('O livro de id ${idDoLivro} não foi encontrado');
}
removeLivro(2356)
console.log(estoque)

const atualizarQuantidade = (idDoLivro, novaQuantidade) => {
    const existeIdNoEstoque = !!estoque.includesfind(Livro => livro.id === idDoLivro)
    if (livo.id === idDoLivro) {
        for (let livro of estoque) {
            if(livro.id === idDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log('A qauntidade do livro ${livro.titulo} foi atualida');
                break;
            }
        }
    } else {
    console.log(`O id ${idDoLivro} não foi localizado no estoque`)
    }
}

atualizarQuantidade(2034, 1300);
console.log(estoque);

const ListarLivros = () => {[
    if (estoque.length === 0)  {
        console.log('O estoque está vazio')
            }    else {
            console.log('O estoque possui $estoque.lenght} titulos.')
            for (let livro of estoque) {
                console.log(`ID: ${livro.id}
                Livro: ${livro.titulo}
                Autor: ${livro.autor}
                Quantidade: ${livro.quantidade}
                ´)
                
            }
        }
        )
    }
]}


