const $botaoPesquisar = document.getElementById("btnPesquisar");
const $caixaTexto = document.getElementById("txtCaixa");
const $cidades = document.getElementById("cidades");



const verificarEstado = (siglaEstado) => $caixaTexto.value == siglaEstado.sigla.toUpperCase();


const filtrarEstado = (json) =>{
	console.log(json.filter(verificarEstado));
}

const montarEstrutura = (acumuladora, cidade, i) =>{
	if(i % 2 == 0){
	return `${acumuladora}
	<div class="cidade dark">
		<div class="numero-cidade">
			${cidade.id}
		</div>

		<div class="nome-cidades">
			${cidade.nome}
		</div>
	</div>
	`;
	}else{
	return `${acumuladora}
	<div class="cidade light">
		<div class="numero-cidade">
			${cidade.id}
		</div>

		<div class="nome-cidades">
			${cidade.nome}
		</div>
	</div>
	`;
	}
}

const mostrarCidades = (json) => {
	return json[0].cidades.reduce(montarEstrutura, "");
}

$botaoPesquisar.addEventListener("click",() => $cidades.innerHTML = mostrarCidades(estados.filter(verificarEstado)));






