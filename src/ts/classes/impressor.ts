import Pagamento from "../interface/pagamento";

export default class Impressor {
    public imprimir(pagamento: Pagamento): void {
        console.log('Valores e forma de pagamento: ')
        console.log(`R$: (${pagamento.calcular()})`)
    }
}