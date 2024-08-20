document.getElementById('comprar').onclick = function () {
    let prod = prompt("Que produto voce está comprando?");
    let preco = parseFloat(prompt(`Quanto custa o ${prod} que voce está comprando?`));
    let valor = parseFloat(prompt(`Qual foi o valor que voce deu para pagar o ${prod}?`));
    let troco = valor - preco;

    const precoFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const trocoFormatado = troco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    alert(`Você comprou ${prod} que custou ${precoFormatado}\n Deu ${valorFormatado} em dinheiro. O seu troco é de ${trocoFormatado}`);
}