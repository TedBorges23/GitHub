function adicionarPlano() {
    const tabela = document.getElementById('tabela-planos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    for (let i = 0; i < 8; i++) {
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

    // Adiciona o plano ao localStorage
    salvarPlanoNoBanco(novaLinha);
}

function removerPlano(botao) {
    const linha = botao.parentNode.parentNode;
    const nomePlano = linha.cells[0].firstChild.value; // Obtém o nome do plano
    linha.parentNode.removeChild(linha);

    // Remove o plano do localStorage
    removerPlanoDoBanco(nomePlano);
}

function salvarPlanoNoBanco(linha) {
    const nome = linha.cells[0].firstChild.value;
    const tipo = linha.cells[1].firstChild.value;
    const visa = linha.cells[2].firstChild.value;
    const mastercard = linha.cells[3].firstChild.value;
    const elo = linha.cells[4].firstChild.value;
    const hipercard = linha.cells[5].firstChild.value;
    const amex = linha.cells[6].firstChild.value;
    const prazo = linha.cells[7].firstChild.value;

    const plano = { nome, tipo, visa, mastercard, elo, hipercard, amex, prazo };
    const planos = JSON.parse(localStorage.getItem('planos')) || [];
    planos.push(plano);
    localStorage.setItem('planos', JSON.stringify(planos));
}

function removerPlanoDoBanco(nome) {
    const planos = JSON.parse(localStorage.getItem('planos')) || [];
    const planosAtualizados = planos.filter(plano => plano.nome !== nome);
    localStorage.setItem('planos', JSON.stringify(planosAtualizados));
}

function carregarPlanosDoBanco() {
    const planos = JSON.parse(localStorage.getItem('planos')) || [];
    const tabela = document.getElementById('tabela-planos').getElementsByTagName('tbody')[0];

    planos.forEach(plano => {
        const novaLinha = tabela.insertRow();
        novaLinha.innerHTML = `
            <td><input type="text" value="${plano.nome}"></td>
            <td><input type="text" value="${plano.tipo}"></td>
            <td><input type="text" value="${plano.visa}"></td>
            <td><input type="text" value="${plano.mastercard}"></td>
            <td><input type="text" value="${plano.elo}"></td>
            <td><input type="text" value="${plano.hipercard}"></td>
            <td><input type="text" value="${plano.amex}"></td>
            <td><input type="text" value="${plano.prazo}"></td>
            <td><button onclick="removerPlano(this)">Remover</button></td>
        `;
    });
}

// Carrega os planos do localStorage ao carregar a página
window.onload = carregarPlanosDoBanco;
