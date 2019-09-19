const $container = document.getElementById('container');

const numeroAleatorio = ( min, max )=> {

	return Math.floor( Math.random()*( max + 1 - min ) ) + min;
}

const gerarNumeros = () => {
	let numeros = [];
	for( let i = 0 ; i < 30 ; i++ ){
		numeros.push( numeroAleatorio( 1 , 20 ) );
	}
	return numeros;
}

const gerarCards = (arr, header, title ) => {
	let html = `
	<div class='card'>
		<div class='card-header'>${header}</div>
		<div class='card-body'>
			<h5 class='card-title'> ${title}</h5>
			<p class='card-text'> ${arr.join(" ")} </p>
		</div>
	</div>`
    
	return html;
}

const numeros = gerarNumeros();

const epar = (num) => num % 2 == 0;

const quadrado = (num) => num * num;

const eUnico = (el, i, arr) => {
    /*let qtd = arr.filter (num => num == el ).lenght;
    return qtd == 1;*/
    
    let cont = 0;
    for(i=0 ; i < arr.length; i++){
        if ( el == arr[i]){
            cont++;
        }
    }
    return cont ==1;
}

const filtrarPar = (arr) => arr.filter( epar );
const arrayQuadrado = (arr) => arr.map(quadrado);
const arrayUnico = (arr) => arr.filter(eUnico);

const numerosPares = filtrarPar(numeros);
const numerosQuadrados = arrayQuadrado(numeros);
const numerosUnicos = arrayUnico(numeros);




$container.innerHTML = gerarCards(numeros,"Exer1","Array Aleatorio");
$container.innerHTML += gerarCards(numerosPares, "Exer2","Pares");
$container.innerHTML += gerarCards(numerosQuadrados, "Exer3","Quadrado");
$container.innerHTML += gerarCards(numerosUnicos, "Exer4","Unicos");
