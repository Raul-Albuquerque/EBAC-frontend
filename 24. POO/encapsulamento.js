function Funcionario(nome, cargo, salario) {

    let _nome = nome;
    let _cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number' ) {
            _salario = valor;
        }
    }    
}

const funcionario1 = new Funcionario ('Raul', 'dev front end', 5000);
funcionario1.setSalario(7000);
console.log(funcionario1.getSalario());