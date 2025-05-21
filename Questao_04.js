class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() >= 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "da Silva", 6, 5.5),
    new Aluno("Ciclano", "Pereira", 9, 8),
    new Aluno("Beltrano", "Souza", 4, 6),
    new Aluno("Fulano", "Almeida", 10, 9.5)
];

function mostrarResultados() {
    alunos.forEach(aluno => {
        alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
    });
}

mostrarResultados();
