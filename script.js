function RealParaDolar(valorConverter, valorCotacao) {
    let valorConvertido;
    valorConvertido = (valorConverter / valorCotacao).toFixed(2);

    return valorConvertido;

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
        } else {
            cotacaoMoeda = prompt("Digite a cotação do euro:");
            simboloMoeda = "€";
        }
        valorConvertido = RealParaDolar(valorConverter, cotacaoMoeda);
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