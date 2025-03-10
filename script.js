function adicionarPlano() {
    const tabela = document.getElementById('tabela-planos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    for (let i = 0; i < 7; i++) { // Agora são 7 campos (incluindo Amex)
        const novaCelula = novaLinha.insertCell();
        const novoInput = document.createElement('input');
        novoInput.type = 'text';
        novaCelula.appendChild(novoInput);
    }

    const celulaAcoes = novaLinha.insertCell();
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function() {
        removerPlano(this);
    };
    celulaAcoes.appendChild(botaoRemover);
}

function removerPlano(botao) {
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
