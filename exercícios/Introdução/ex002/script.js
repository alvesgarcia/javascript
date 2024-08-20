//Neste exemplo, JavaScript altera o valor do atributo src (fonte) de uma tag <img>: 
document.getElementById("on").onclick = function() {
  document.getElementById("myImage").src = "imagens/turn-on.png";
}

document.getElementById("off").onclick = function() {
  document.getElementById("myImage").src = "imagens/turn-off.png";
}   