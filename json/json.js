const alunos = [
	{
		"nome":"Pedro",
		"idade":21,
		"uf":"SP",
		"salario":400.00,
	},
	{
		"nome":"Joaquina",
		"idade":22,
		"uf":"RJ",
		"salario":500.00,
	},
	{
		"nome":"hugo",
		"idade":23,
		"uf":"SP",
		"salario":1500.00,
	},
	{
		"nome":"Stiglitz",
		"idade":41,
		"uf":"AC",
		"salario":2500.00,
	}
];	

const $dados = document.getElementById("dados");

const mostrarDados = ( json , atributo ) => {
	
    
	/*let tamanhoDoArray = json.length;
	let valores = "";
	let idades = "";

	for( let i=0 ; i < tamanhoDoArray ; i++ ){
		valores += `${json[i].nome} - ${json[i].idade} - ${json[i].uf} - R$ ${json[i].salario},00 <br>`;
	}
	return valores;*/
    
    
    const criarHtml = (html, aluno) => `${html} ${aluno.nome} - ${aluno[atributo]}<br>`;
    
    return json.reduce(criarHtml, "")
}

const mostrarNome = ( json ) => {
    const exibirNome = (html, aluno) => `${html} ${aluno.nome} - ${aluno.salario}<br>`
    
    return json.reduce(exibirNome, "");
}


const alunosSp = (aluno) => aluno.uf == "SP";

const medidorDeSalario = (aluno) => aluno.salario < 1000;

const somaSalarios = (acumulador, alunos) => acumulador + alunos.salario;
const aumentaSalario = ( aluno ) => ({"nome" : aluno.nome, "salario" : aluno.salario + 1000});

$dados.innerHTML = mostrarDados( alunos,"idade" );
$dados.innerHTML += "<h5> ---- alunos de SP ---- <h5>";
$dados.innerHTML += mostrarDados(alunos.filter(alunosSp),"uf");
$dados.innerHTML += "<h5> ---- SALÁRIO TOTAL DOS FUNCIONARIOS ---- <h5>";
$dados.innerHTML += alunos.reduce ( somaSalarios, 0 );
$dados.innerHTML += "<h5> ---- Aumentos de salários ---- <h5>";
$dados.innerHTML += mostrarDados(alunos.map ( aumentaSalario ), "salario");
$dados.innerHTML += "<h5> ---- Aumentando salarios dos alunos de sp ---- <h5>";
$dados.innerHTML += mostrarDados(alunos.filter(alunosSp).map(aumentaSalario),"salario");
$dados.innerHTML += "<h5> ---- mostrando alunos de sp que recebem menos de 1000 ---- <h5>";
$dados.innerHTML += mostrarDados(alunos.filter(alunosSp).filter(medidorDeSalario),"salario");























