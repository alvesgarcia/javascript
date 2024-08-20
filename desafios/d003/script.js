document.getElementById('inteiro').onclick = function() {
    let num = parseInt(prompt("Digite um número: "));
    alert(`Antes de ${num}, temos o número ${num - 1}\nDepois de ${num}, temos o número ${num + 1}`);
}