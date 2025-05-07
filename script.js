function RealParaDolar(valorConverter, valorCotacao) {
    // const cotacao = 5.76;
    // valorConvertido = (valorConverter / cotacao).toFixed(2);
    let valorConvertido;
    valorConvertido = (valorConverter / valorCotacao).toFixed(2);

    return "U$" + valorConvertido;

}

function RealParaEuro(valorConverter, valorCotacao) {
    // const cotacao = 6.52;
    let valorConvertido;
    valorConvertido = (valorConverter / valorCotacao).toFixed(2);

    return valorConvertido

    // return `€ ${valorConvertido}`;

}



function main() {
    let valorConverter, cotacaoMoeda, valorConvertido;
    let opcaoMoeda;
    let simboloMoeda;

    opcaoMoeda = prompt("Olá, Qual conversão você deseja realizar hoje? 1 - Dólar 2 - Euro");

    if (opcaoMoeda != 1 && opcaoMoeda != 2) {
        alert("Opção inválida!");
    } else {
        valorConverter = prompt("Digite o valor que deseja converter: (em R$)");

        if (opcaoMoeda == 1) {
            cotacaoMoeda = prompt("Digite a cotação do dólar:");
            simboloMoeda = "U$";
            valorConvertido = RealParaDolar(valorConverter, cotacaoMoeda); //se for definir a cotação fixa posso tirar a cotacaoMoeda daqui
        } else {
            cotacaoMoeda = prompt("Digite a cotação do euro:");
            simboloMoeda = "€";
            valorConvertido = RealParaEuro(valorConverter, cotacaoMoeda); //se for definir a cotação fixa posso tirar a cotacaoMoeda daqui
        }
        
        alert(
            "O valor convertido para " +
            simboloMoeda +
            " resultou em " +
            simboloMoeda +
            valorConvertido
        );
    }
}

main();