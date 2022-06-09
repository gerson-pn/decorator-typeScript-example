import Pagamento from "../interface/pagamento"

export default class PagamentoVista implements Pagamento {
    private valor: number
    constructor(valor: number) {
        this.valor = valor
    }
    calcular(): number | number[] {
        return this.valor
    }
}

