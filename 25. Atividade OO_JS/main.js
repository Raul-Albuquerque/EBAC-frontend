function Animal (nome, especie, meio, peso) {
    this.nome = nome;
    this.especie = especie;
    this.meio = meio;
    this.peso = peso;
}

function AnimalAquatico (nome, especie, meio, peso) {
    Animal.call(this, nome, especie, meio, peso);
}

function AnimalTerrestre(nome, especie, meio, peso) {
    Animal.call(this, nome, especie, meio, peso);
}

const golfinho = new AnimalAquatico('Golfinho', 'Delphinus delphis L', 'Aquático', 650);
const elefante = new AnimalTerrestre('Elefante Africano', 'Loxodonta africana', 'Terrestre', 6000);
const orca = new AnimalAquatico('Orca', 'Orcinus orca', 'Aquático', 4000);
const rinoceronteBranco = new AnimalTerrestre('Rinoceronte-Branco', 'Ceratotherium simum', 'terrestre', 2300);