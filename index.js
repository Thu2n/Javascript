// Criar uma função que calcula o tempo restante, e recebe dataFutura

const calcularTempoRestante = (dataFutura) => {
    const agora = new Date().getTime()
    const diferencaDeDatas = Datafutura - agora;

    const segundosDeUmMinuto = 60 * 1000;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDoDia = 24 * segundosDeUmaHora;

    const dias = Math.floor(diferenca / segundosDoDia);
    const horas = Math.floor((diferencaDeDatas % segundosDoDia) / segundosDeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosDeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000)

    return {
        dias,
        horas,
        minutos,
        segundos
    }

}
const dataFutura = new Date('2024-11-30T12:00:00').getTime()
//console.log(calcularTempoRestante(dataFutura))

//Função que atualiza o temporizador
const atualizarTemporizador = () => {
    const dataFutura = new Date('2024-11-30T12:00:00')
    const tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById('dias').innerText = `Dias ${tempoRestante.dias}`;
    document.getElementById('horas').innerText = `Horas ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempoRestante.minutos}`
    document.getElementById('segundos').innerText = `Segundos ${tempoRestante.segundos}`

}

const intervalo = setInterval(atualizarTemporizador, 1000);

//atualizarTemporizador()