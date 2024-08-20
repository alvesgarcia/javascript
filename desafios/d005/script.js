document.getElementById('conversor').onclick = function() {
    let distancia = parseFloat(prompt('Digite uma distância em metros (m)'));
    
    let km = (distancia / 1000).toFixed(3).toString().replace('.', ',');
    let hm = (distancia / 100).toFixed(3).toString().replace('.', ',');
    let dam = distancia / 10;
    let dm = (distancia * 10).toFixed(1).toString().replace('.', ',');
    let cm = distancia * 100;
    let mm = distancia * 1000;

    document.getElementById('resultado')
    .innerHTML = `<strong>A distância de ${distancia.toFixed(2).toString().replace('.',',')} metros, corresponde a:</strong> <br>
    
    ${km} km (quilômetros) <br>`
    + `${hm} hm (hectômetros) <br>`
    + `${dam} dam (decâmetros) <br>`
    + `${dm} dm (decímetros) <br>`
    + `${cm} cm (centímetros) <br>`
    + `${mm} mm (milímetros) <br>`;

 
}