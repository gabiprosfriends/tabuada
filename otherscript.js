const numElement = document.getElementById('num');
const btn = document.getElementById('go');
const table = document.getElementById('tabuada');

btn.addEventListener("click", () => {
    table.innerHTML = null;
    for (let i = 0; i <= 10; i++) {
        const line = document.createElement("tr");
        const multiplicador = document.createElement("th");
        const mult = document.createElement("th")
        const multiplicando = document.createElement("th");
        const result = document.createElement("th");
        const produto = document.createElement("th");
        
        mult.innerHTML = "x";
        result.innerHTML = "=";
        multiplicador.innerHTML = numElement.value;
        multiplicando.innerHTML = i;
        produto.innerHTML = numElement.value * i;
        line.appendChild(multiplicador);
        line.appendChild(mult);
        line.appendChild(multiplicando);
        line.appendChild(result);
        line.appendChild(produto);
        table.appendChild(line);
    }
});