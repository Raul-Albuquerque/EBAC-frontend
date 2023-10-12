const funcaoMuitoPesadaPromises = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;

        for(let i = 0; i < 1000000000; i++) {
            execucoes++;
        };
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na iteração dos números');
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`logado com o usuário:${login}`)
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log("início");

    promiseComParametros('raul@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })

    try {
        const resultado = await funcaoMuitoPesadaPromises;
        console.log(resultado);
    } catch(e) {
        console.log(e);
    }
    
    console.log("fim");

}

execucaoPrincipal();

