document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formConversao');
    const inputValor = document.getElementById('valor');
    const selectMoeda = document.getElementById('moeda');
    const resultado = document.getElementById('resultado');

    const cotacoes = {
        dolar: 5.67,
        euro: 6.40
    };

    function converterRealParaDolar(valor) {
        return (valor / cotacoes.dolar).toFixed(2);
    }

    function converterRealParaEuro(valor) {
        return (valor / cotacoes.euro).toFixed(2);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // impede envio de formulário

        const valor = parseFloat(inputValor.value);
        const moeda = selectMoeda.value;

        if (isNaN(valor) || valor <= 0) {
            resultado.textContent = "Por favor, digite um valor válido.";
            return;
        }

        let valorConvertido = "";
        let simbolo = "";

        if (moeda === "dolar") {
            valorConvertido = converterRealParaDolar(valor);
            simbolo = "U$";
        } else if (moeda === "euro") {
            valorConvertido = converterRealParaEuro(valor);
            simbolo = "€";
        } else {
            resultado.textContent = "Selecione uma moeda válida.";
            return;
        }

        resultado.textContent = `O valor convertido é: ${simbolo} ${valorConvertido}`;
    });
});
