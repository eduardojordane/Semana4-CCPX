const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "01 dec 2023"
//o padrão deve ser em inglês

function countDown(){
    const dataLancamento = new Date(lancamento) //vai converter a string em data
    const hoje = new Date() //deixando vazio ele já pega a data de hoje
    //podemos fazer operações matemáticas com datas, mas o resultado vem em milisegundos...temos que converter
    
    const segTotal = (dataLancamento - hoje)/1000 //dividindo por 1000 pra termos o valor em segundo

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);   
    //vai armazenar o valor real dos dias que vão aparecer no countdown
    //Math.floor vai pegar o menor inteiro

    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias) + "D"
    hora.innerHTML = formatoTempo(finalHoras) + "H"
    minuto.innerHTML = formatoTempo(finalMinutos) + "M"
    segundo.innerHTML = formatoTempo(finalSegundos) + "S"
}

//criar função para adcionar um zero ao lado esquerdo do número, quando for menor que 10
function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
    //return tempo < 10?; se for menor, vai retornar um zero seguido do tempo (concatenar)
    //se não for menor, então vai retornar o tempo sem concatenar com zero antes
}

countDown();
setInterval(countDown, 1000) /*vai chamar a função countdown a cada 1000 milisegundos (1 segundo), 
senão eu teria que ficar atualizando a página pra ver mudar */