import Pagamento from "../interface/pagamento";

export default abstract class PagamentoDecorador implements Pagamento {
    protected pagamento: Pagamento
    constructor(pagamento: Pagamento) {
        this.pagamento = pagamento
    }
    abstract calcular(): number | number[]
}

