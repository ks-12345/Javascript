let biblioteca = [];

function adicionarLivro() {
    let titulo = prompt ("Digite o título do livro:")
    let autor = prompt ("Digite o autor do livro:")
    let ano = parseInt(prompt ("Digite o ano de pubicaçao do livro:"))
    biblioteca.push({titulo, autor, ano});
    alert("Livro adicionado com sucesso!");
}

function exibirmenu() {
    return prompt (
        "1. para adicionar um livro\n" +
        "2. Busca livro \n" +
        "3. Para exibir os livros\n" +
         "4.  Emprestimo de Livro \n" +
        "5. Para sair \n" +
         "Escolha uma opção:"
    );
}

function listarlivro () {
    if (biblioteca.length> 0) {
        let mensagem = "lista de livros na biblioteca: \n";
        biblioteca.forEach((livro) => {
            mensagem += `Título: ${livro.titulo} | Autor: ${livro.autor} | Ano: ${livro.ano}\n`;
        });
        alert(mensagem);
    } else {
        alert("a biblioteca está vazia");
    }
}

function Emprestimodelivro () {
        let titulo = prompt ("Digite o título do livro:")
         let autor = prompt ("Digite o nome do autor do livro:")
    let nome = prompt ("Digite o seu nome:")
    let documento = parseInt(prompt ("Digite seu documento(RG ou CPF):"))
let data = prompt ("Digite a data do Emprestimo:")

    biblioteca.push({titulo, autor, nome , documento, data});
    alert("Emprestimo de Livro concluido com sucesso!");
}

//exibirmenu();
//adicionarLivro();
//listarlivro();
Emprestimodelivro();
