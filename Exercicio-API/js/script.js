 const $seletorUsuario = document.getElementById('seletor1');
const $moedaUsuario = document.getElementById('valorMoeda');
const $seletorMoeda = document.getElementById('seletor2');
const $resultado = document.getElementById('resultado');
const $botao = document.getElementById('botao'); 

const converterMoeda = (moedaEscolhida, convertida) =>{

    const url = 'https://api.hgbrasil.com/finance?key=development';
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    fetch ( proxy + url )
    .then( res => res.json() )
    .then( res => conversao(res) )

    const conversao = json =>{

        if(moedaEscolhida == "BRL"){
            $resultado.value = $moedaUsuario.value * json.results.currencies[convertida].buy.toFixed(2);
            $resultado.style.backgroundColor = "#ccc";
            $resultado.style.cursor = "not-allowed";
        }

    }
   
}

$botao.addEventListener("click", () => converterMoeda($seletorUsuario.value, $seletorMoeda.value));











