import Impressor from "../classes/impressor";
import PagamentoParcelado from "../classes/pagamentoParcelado";
import PagamentoVista from "../classes/pagamentoVista";
import Entrada from "../io/entrada";

let entrada = new Entrada()
let impressor = new Impressor()
let execucao = true

console.log(`Bem-vindo(a) ao sistema de cálculo de pagamento/parcelamento`)

while (execucao) {
    console.log(`Por favor selecione uma opcao: `);
    console.log(`1 - Pagamento à vista`);
    console.log(`2 - Pagamento Parcelado`);
    console.log(`3 - Pagamento Parcelado com entrada`);
    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero('Qual a opcao desejada? ')
    let valor = 0
    let pagamento = undefined

    switch (opcao) {
        case 1:
            valor = entrada.receberNumero('Qual o valor para pagamento: ')
            pagamento = new PagamentoVista(valor)
            impressor.imprimir(pagamento)
            break;
        case 2:
            valor = entrada.receberNumero('Qual o valor para pagamento: ')
            let parcelas = entrada.receberNumero('Quantidade de parcelas: ')
            pagamento = new PagamentoVista(valor)
            let pagamentoParcelado = new PagamentoParcelado(pagamento, parcelas)
            impressor.imprimir(pagamentoParcelado)
            break;
        case 0:
            execucao = false
            console.log(`Até logo`);
            break;
        default:
            console.log(`Opcao não entendida`);

    }
}