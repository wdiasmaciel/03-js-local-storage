document.addEventListener('DOMContentLoaded', () => {
    const formularioUsuario = document.getElementById('formularioUsuario');
    const entradaNome = document.getElementById('entradaNome');
    const entradaIdade = document.getElementById('entradaIdade');
    const entradaCurso = document.getElementById('entradaCurso');
    const listaUsuarios = document.getElementById('listaUsuarios');

    // Função para salvar os dados no LocalStorage como array de objetos:
    function salvarDados() {
        const usuario = {
            nome: entradaNome.value,
            idade: entradaIdade.value,
            curso: entradaCurso.value
        };

        // Recuperar a lista de usuários do LocalStorage:
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Adicionar o novo usuário à lista:
        usuarios.push(usuario);

        // Salvar a lista atualizada no LocalStorage:
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        exibirUsuarios();
        entradaNome = entradaIdade = entradaCurso = "";
    }

    // Função para exibir a lista de usuários salvos:
    function exibirUsuarios() {
        // Limpar a lista atual:
        listaUsuarios.innerHTML = '';

        // Recuperar a lista de usuários do LocalStorage:
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Adicionar cada usuário da lista na interface:
        usuarios.forEach((usuario, index) => {
            const li = document.createElement('li');
            li.textContent = `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Curso: ${usuario.curso}`;
            listaUsuarios.appendChild(li);
        });
    }

    // Evento de submissão do formulário:
    formularioUsuario.addEventListener('submit', (evento) => {
        // Previne o comportamento padrão do formulário (recarregar a página):
        evento.preventDefault(); 

        // Salva os dados no LocalStorage:
        salvarDados(); 
    });

    // Exibir a lista de usuários quando a página for carregada pelo navegador:
    exibirUsuarios();
});
