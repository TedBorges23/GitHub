const tabelaPlanos = document.getElementById('tabela-planos').getElementsByTagName('tbody')[0];
const formAdicionarPlano = document.getElementById('form-adicionar-plano');
const pesquisaInput = document.getElementById('pesquisa');

let planos = [
    {
        nome: 'Plano Débito',
        tipo: 'Débito',
        visa: '1,40%',
        mastercard: '1,40%',
        elo: '2,40%',
        hipercard: '-',
        prazo: 'D+1'
    },
    {
        nome: 'Plano Crédito à vista',
        tipo: 'Crédito à vista',
        visa: '2,20%',
        mastercard: '2,20%',
        elo: '2,80%',
        hipercard: '2,80%',
        prazo: 'D+30'
    },
    {
        nome: 'Plano Crédito 2x-6x',
        tipo: 'Crédito 2x-6x',
        visa: '2,60%',
        mastercard: '2,60%',
        elo: '3,20%',
        hipercard: '3,20%',
        prazo: 'D+30'
    },
    {
        nome: 'Plano Crédito 7x-12x',
        tipo: 'Crédito 7x-12x',
        visa: '2,80%',
        mastercard: '2,80%',
        elo: '3,80%',
        hipercard: '3,80%',
        prazo: 'D+30'
    },
    {
        nome: 'Plano Crédito 13x-21x',
        tipo: 'Crédito 13x-21x',
        visa: '3,20%',
        mastercard: '3,20%',
        elo: '4,20%',
        hipercard: '4,20%',
        prazo: 'D+30'
    }
];

function atualizarTabela() {
    const pesquisa = pesquisaInput.value.toLowerCase();
    const planosFiltrados = planos.filter(plano => {
        return plano.nome.toLowerCase().includes(pesquisa) ||
               plano.tipo.toLowerCase().includes(pesquisa) ||
               plano.visa.toLowerCase().includes(pesquisa) ||
               plano.mastercard.toLowerCase().includes(pesquisa) ||
               plano.elo.toLowerCase().includes(pesquisa) ||
               plano.hipercard.toLowerCase().includes(pesquisa) ||
               plano.prazo.toLowerCase().includes(pesquisa);
    });

    tabelaPlanos.innerHTML = '';

    planosFiltrados.forEach((plano, index) => {
        const rowIndex = planos.indexOf(plano); // Encontra o índice correto no array original

        const row = tabelaPlanos.insertRow();
        const cellNome = row.insertCell();
        const cellTipo = row.insertCell();
        const cellVisa = row.insertCell();
        const cellMastercard = row.insertCell();
        const cellElo = row.insertCell();
        const cellHipercard = row.insertCell();
        const cellPrazo = row.insertCell();
        const cellAcoes = row.insertCell();

        cellNome.textContent = plano.nome;
        cellTipo.textContent = plano.tipo;
        cellVisa.textContent = plano.visa;
        cellMastercard.textContent = plano.mastercard;
        cellElo.textContent = plano.elo;
        cellHipercard.textContent = plano.hipercard;
        cellPrazo.textContent = plano.prazo;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerPlano(rowIndex); // Usa o índice correto
        cellAcoes.appendChild(botaoRemover);
    });
}

function removerPlano(index) {
    planos.splice(index, 1);
    atualizarTabela();
}

formAdicionarPlano.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const visa = document.getElementById('visa').value;
    const mastercard = document.getElementById('mastercard').value;
    const elo = document.getElementById('elo').value;
    const hipercard = document.getElementById('hipercard').value;
    const prazo = document.getElementById('prazo').value;

    const novoPlano = { nome, tipo, visa, mastercard, elo, hipercard, prazo };
    planos.push(novoPlano);

    formAdicionarPlano.reset();
    atualizarTabela();
});

pesquisaInput.addEventListener('input', atualizarTabela);

atualizarTabela();
