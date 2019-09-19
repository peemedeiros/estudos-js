//Pesquisando Estados com JSON exercicio 1

const $botaoPesquisar = document.getElementById("btnPesquisar");
const $caixaTexto = document.getElementById("txtCaixa");
const $cidades = document.getElementById("cidades");

//verificando se o que foi digitado na caixa é igual a uma sigla de estado
const verificarEstado = (siglaEstado) => $caixaTexto.value.toUpperCase().trim() == siglaEstado.sigla;

//fitrando o Json(estados) usando como callback a função verificaEstados(siglaEstado)
const filtrarEstado = (json) =>{
	console.log(json.filter(verificarEstado));
}
//monta a estrutuda zebrada no HTML caso o indice do reduce par ou impar
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
//pega o array que foi selecionado e mostra as cidades concatenadas pela função reduce()
const mostrarCidades = (json) => {
	return json[0].cidades.reduce(montarEstrutura, "");
}

$botaoPesquisar.addEventListener("click",() => $cidades.innerHTML = mostrarCidades(estados.filter(verificarEstado)));






