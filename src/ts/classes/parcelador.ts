export default class Parcelador {
    private valor: number
    private parcelas: number
    constructor(valor: number, parcelas: number) {
        this.valor = valor
        this.parcelas = parcelas
    }

    public dividir(): number[] {
        let parcela = this.valor / this.parcelas
        parcela = Number(this.fixar(parcela, 2))
        let valores = []
        for (let index = 0; index < this.parcelas; index++) {
            valores.push(parcela)
        }
        this.ajustarParcela(valores, this.valor)
        return valores
    }

    private fixar(numero: number, casaDecimal: number) {
        let valor = Number(numero)
        let expressao = new RegExp('^-?\\d+(?:\.\\d{0,' + (casaDecimal || -1) + '})?')
        let resultado = valor.toString().match(expressao)
        if (resultado == null) {
            return numero
        } else {
            return resultado[0]
        }
    }

    private ajustarParcela(valores: number[], valorTotal: number) {
        let soma = 0
        valores.forEach(valor => {
            soma = soma + valor
        })
        if (soma < valorTotal) {
            let diferenca = valorTotal - soma
            valores[0] = valores[0] + diferenca
        }
    }
}