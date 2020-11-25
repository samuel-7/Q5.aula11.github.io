function verificaTriangulo() {
    var inLadoA = document.getElementById('ladoA')
    var inLadoB = document.getElementById('ladoB')
    var inLadoC = document.getElementById('ladoC')

    var outVerificador = document.getElementById('outVerificador')
    var outTipoTriangulo = document.getElementById('outTipoTriangulo')

    var ladoA = Number(inLadoA.value)
    var ladoB = Number(inLadoB.value)
    var ladoC = Number(inLadoC.value)
    var respostaVerificador = ""
    var respostaTipoTriangulo = ""

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        alert("Valor inválido!")
        inNumero.focus()
        return
    } else if (ladoA >= ladoB + ladoC || ladoB >= ladoA + ladoC || ladoC >= ladoA + ladoB || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        respostaVerificador = "Lados não podem formar um triângulo"
        respostaTipoTriangulo = "Um dos lados excedeu soma dos outros dois!"
        outVerificador.textContent = respostaVerificador
        outTipoTriangulo.textContent = respostaTipoTriangulo

    } else if (ladoA == ladoB && ladoB == ladoC) {
        respostaVerificador = "Lados podem formar um triângulo"
        respostaTipoTriangulo = "Tipo: Equilátero"
        outVerificador.textContent = respostaVerificador
        outTipoTriangulo.textContent = respostaTipoTriangulo

    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        respostaVerificador = "Lados podem formar um triângulo"
        respostaTipoTriangulo = "Tipo: Isósceles"
        outVerificador.textContent = respostaVerificador
        outTipoTriangulo.textContent = respostaTipoTriangulo
    } else {
        respostaVerificador = "Lados podem formar um triângulo"
        respostaTipoTriangulo = "Tipo: Escaleno"
        outVerificador.textContent = respostaVerificador
        outTipoTriangulo.textContent = respostaTipoTriangulo
    }
}

var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificaTriangulo)