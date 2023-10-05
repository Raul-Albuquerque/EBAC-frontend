AOS.init(); //iniciar a biblioteca de scroll

const dataDoEvento = new Date("dec 12, 2023, 19:00:00"); //utilizei para instânciar a data do evento - pode ser futuro ou passado
const timeStampDoEvento = dataDoEvento.getTime(); //utilizado para pegar o timestamp do evento (valor em milissegundo)

const contaAsHoras = setInterval(function() { //funcao que estabelece o intervalo
    const agora = new Date(); //utilizei para instânciar a data atual
    const timeStampAtual = agora.getTime(); //utilizado para pegar o timeStamp atual


    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;  //vai pegar a diferença em ms entre a data do evento e a data atual

    const diasEmMs = 1000 * 60 * 60 * 24;  //transforma ms em dias
    const horaEmMs = 1000 * 60 * 60; //transforma os ms em horas
    const minEmMs = 1000 * 60;  //transforma os ms em min

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs); //dias até o evento
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs) //horas até o evento
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minEmMs) //minutos até o evento
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minEmMs) / 1000) //segundos até o evento

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}s`; //vai renderizar a data no html

    if(distanciaAteOEvento < 0 ) {    //cria uma condição caso o evento já tenha passado.
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado.'  //mensagem de evento expirado.
    }

}, 1000)