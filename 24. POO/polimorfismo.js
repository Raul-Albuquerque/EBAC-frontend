function Funcionario(nome, cargo, salario) {

    let _nome = nome;
    let _cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        console.log(novoSalario);
        _salario = novoSalario;
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, 'estagiario', 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario = novoSalario;

        console.log(novoSalario);
        _salario = novoSalario;
    }
}

const funcionario1 = new Funcionario('Raul', 'dev front end', 5000);
const funcionario2 = new Estagiario('Pedro');
funcionario1.aumento();
console.log(funcionario1.getSalario());
funcionario2.aumento();
console.log(funcionario2.getSalario());