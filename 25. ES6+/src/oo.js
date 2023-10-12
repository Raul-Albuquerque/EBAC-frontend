class Pokemon {
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();
console.log(pikachuDoAsh.hp);