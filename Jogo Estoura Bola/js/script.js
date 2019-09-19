function addBola() {
	const bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	const p1 = Math.floor(Math.random()*1900);
	const p2 = Math.floor(Math.random()*900);
	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
	bola.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(bola);
}
function estourar(elemento) {
	document.body.removeChild(elemento);
}
function iniciar() {
	setInterval(addBola, 500);
}
function sumir() {
	const botao = document.getElementById('botao');
	botao.setAttribute("class", "sumir");

}