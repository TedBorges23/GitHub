const tabelaPlanos = document.getElementById('tabela-planos').getElementsByTagName('tbody')[0];

const planos = [
    {
        tipo: 'Débito',
        visa: '1,40%',
        mastercard: '1,40%',
        elo: '2,40%',
        hipercard: '-',
        prazo: 'D+1'
    },
    {
        tipo: 'Crédito à vista',
        visa: '2,20%',
        mastercard: '2,20%',
        elo: '2,80%',
        hipercard: '2,80%',
        prazo: 'D+30'
    },
    {
        tipo: 'Crédito 2x-6x',
        visa: '2,60%',
        mastercard: '2,60%',
        elo: '3,20%',
        hipercard: '3,20%',
        prazo: 'D+30'
    },
    {
        tipo: 'Crédito 7x-12x',
        visa: '2,80%',
        mastercard: '2,80%',
        elo: '3,80%',
        hipercard: '3,80%',
        prazo: 'D+30'
    },
    {
        tipo: 'Crédito 13x-21x',
        visa: '3,20%',
        mastercard: '3,20%',
        elo: '4,20%',
        hipercard: '4,20%',
        prazo: 'D+30'
    }
];

planos.forEach(plano => {
    const row = tabelaPlanos.insertRow();
    const cellTipo = row.insertCell(0);
    const cellVisa = row.insertCell(1);
    const cellMastercard = row.insertCell(2);
    const cellElo = row.insertCell(3);
    const cellHipercard = row.insertCell(4);
    const cellPrazo = row.insertCell(5);

    cellTipo.textContent = plano.tipo;
    cellVisa.textContent = plano.visa;
    cellMastercard.textContent = plano.mastercard;
    cellElo.textContent = plano.elo;
    cellHipercard.textContent = plano.hipercard;
    cellPrazo.textContent = plano.prazo;
});