const numero = document.getElementById('dados');
const botao = document.getElementById('iniciar');
const tabelatabuada = document.getElementById('tabela');

botao.addEventListener("click", () => {
    tabelatabuada.innerHTML = null;
    for (let i = 0; i <= 10; i++) {
        const line = document.createElement("tr");
        const multiplicador = document.createElement("td");
        const mult = document.createElement("td")
        const multiplicando = document.createElement("td");
        const simboloigual = document.createElement("td");
        const resultadoconta = document.createElement("td");

        mult.innerHTML = "x";
        simboloigual.innerHTML = "=";
        multiplicador.innerHTML = numero.value;
        multiplicando.innerHTML = i;
        resultadoconta.innerHTML = numero.value * i;
        line.appendChild(multiplicador);
        line.appendChild(mult);
        line.appendChild(multiplicando);
        line.appendChild(simboloigual);
        line.appendChild(resultadoconta);
        tabelatabuada.appendChild(line);
    }
});