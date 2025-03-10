const plano = {
    debito: {
        tipo: document.getElementById('tipo-debito').value,
        visa: document.getElementById('visa-debito').value,
        mastercard: document.getElementById('mastercard-debito').value,
        elo: document.getElementById('elo-debito').value,
        hipercard: document.getElementById('hipercard-debito').value,
        prazo: document.getElementById('prazo-debito').value
    },
    creditoVista: {
        tipo: document.getElementById('tipo-credito-vista').value,
        visa: document.getElementById('visa-credito-vista').value,
        mastercard: document.getElementById('mastercard-credito-vista').value,
        elo: document.getElementById('elo-credito-vista').value,
        hipercard: document.getElementById('hipercard-credito-vista').value,
        prazo: document.getElementById('prazo-credito-vista').value
    },
    credito2x6x: {
        tipo: document.getElementById('tipo-credito-2x-6x').value,
        visa: document.getElementById('visa-credito-2x-6x').value,
        mastercard: document.getElementById('mastercard-credito-2x-6x').value,
        elo: document.getElementById('elo-credito-2x-6x').value,
        hipercard: document.getElementById('hipercard-credito-2x-6x').value,
        prazo: document.getElementById('prazo-credito-2x-6x').value
    },
    credito7x12x: {
        tipo: document.getElementById('tipo-credito-7x-12x').value,
        visa: document.getElementById('visa-credito-7x-12x').value,
        mastercard: document.getElementById('mastercard-credito-7x-12x').value,
        elo: document.getElementById('elo-credito-7x-12x').value,
        hipercard: document.getElementById('hipercard-credito-7x-12x').value,
        prazo: document.getElementById('prazo-credito-7x-12x').value
    },
    credito13x21x: {
        tipo: document.getElementById('tipo-credito-13x-21x').value,
        visa: document.getElementById('visa-credito-13x-21x').value,
        mastercard: document.getElementById('mastercard-credito-13x-21x').value,
        elo: document.getElementById('elo-credito-13x-21x').value,
        hipercard: document.getElementById('hipercard-credito-13x-21x').value,
        prazo: document.getElementById('prazo-credito-13x-21x').value
    },
    taxaAntecipacao: document.getElementById('taxa-antecipacao').value
};

function atualizarPlano() {
    plano.debito.tipo = document.getElementById('tipo-debito').value;
    plano.debito.visa =
