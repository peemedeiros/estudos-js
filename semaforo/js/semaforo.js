const $img = document.getElementById("img");
const $amarelo = document.getElementById("amarelo");
const $verde = document.getElementById("verde");
const $vermelho = document.getElementById("vermelho");
const $automatico = document.getElementById("automatico");

const ligar = ( cor ) => {
	$img.src = `./img/${cor}.png`; 
}

let i = 0;
const auto = () => {
	
    if (i == 0){
		ligar("vermelho");
        i = 1;
    }else if(i == 1){
        ligar("amarelo");
        i = 2;
    }else{
        ligar("verde");
        i = 0;
    }
}





$amarelo.addEventListener("click", () => ligar("amarelo"));

$verde.addEventListener("click", () => ligar("verde"));

$vermelho.addEventListener("click", () => ligar("vermelho"));

$automatico.addEventListener("click", () => setInterval(auto, 1000));
