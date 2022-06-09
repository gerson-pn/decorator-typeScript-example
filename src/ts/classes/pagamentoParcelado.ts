import Pagamento from "../interface/pagamento";
import PagamentoDecorador from "./pagamentoDecorador";
import Parcelador from "./parcelador";

export default class PagamentoParcelado extends PagamentoDecorador {
    private parcelas: number
    constructor(pagamento: Pagamento, parcelas: number) {
        super(pagamento)
        this.parcelas = parcelas
    }
    calcular(): number | number[] {
        let valor = Number(this.pagamento.calcular().valueOf())
        let parcelador = new Parcelador(valor, this.parcelas)
        return parcelador.dividir()
    }
}

