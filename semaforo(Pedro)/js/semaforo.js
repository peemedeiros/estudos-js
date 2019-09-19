const $img = document.getElementById("img");
const $amarelo = document.getElementById("amarelo");
const $verde = document.getElementById("verde");
const $vermelho = document.getElementById("vermelho");
const $automatico = document.getElementById("automatico");

const ligar = ( cor ) => {
	$img.src = `./img/${cor}.png`;
    clearInterval(iniciarIntervalo);
}

const ligarAutomatico = ( cor ) => {
    $img.src = `./img/${cor}.png`; 
}

const cancelaIntervalo = ( arg ) => {
    clearInterval(arg);

}
let iniciarIntervalo = null;
const intervalo = ( arg ) => {
    iniciarIntervalo = setInterval(arg, 1000);
}

let i = 0;

const auto = () => {
    
    if (i == 0){
		ligarAutomatico("vermelho");
        i = 1;
    }else if(i == 1){
        ligarAutomatico("amarelo");
        i = 2;
    }else{
        ligarAutomatico("verde");
        i = 0;
    }
}


$amarelo.addEventListener("click", () => ligar("amarelo"));

$verde.addEventListener("click", () => ligar("verde"));

$vermelho.addEventListener("click", () => ligar("vermelho"));

$automatico.addEventListener("click", () => intervalo(auto));

$parar.addEventListener("click",() => cancelaIntervalo(iniciarIntervalo));
