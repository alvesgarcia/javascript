
document.getElementById('b1').onclick = function() {
    let nome = prompt('Qual é o seu nome?');
    let idade = prompt(`Olá ${nome}, Qual é a sua idade?`);
    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos.`);
   }
   
document.getElementById('b2').onclick = function() {
    let nome = prompt("Qual é o seu nome?");
    resultado.innerHTML = `<p>Olá <strong>${nome}</strong>, é um grande prazer te conhecer! &#x1F596</p>`;
}