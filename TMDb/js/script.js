//BUSCANDO ELEMENTOS DO HTML
const $mostrar = document.getElementById('mostrar');
const $pesquisa = document.getElementById('pesquisa');
const $botao = document.getElementById('botao');
const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $container = document.getElementById('containerFilmes');
const $containerModal = document.getElementById('containerModal');
const $close = document.getElementById('close');
const $contFilmes = document.getElementById('filmes');


//FAZ UMA REQUISIÇÃO NA API DE ACORDO COM O PARAMETRO
const mostrarFilmes = ( pesquisado ) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=42ebeea476d0f2275d00448a81e47aa9&language=pt-BR&query=${pesquisado}&page=1&include_adult=false`;
    //TRAZ AS RESPOSTAS DA API, TRANSFORMA EM FORMATO JSON E APLICA A FUNÇÃO mostrar();
    fetch(url)
    .then( res => res.json() )
    .then( res => mostrar( res ) )
}

let info = [];

//FUNÇÃO QUE GUARDA OS VALORES RECEBIDOS DA API PARA OS ARRAYS
const mostrar = (json) =>{

    //ARRAY QUE GUARDARÃO AS RESPOSTAS DA API
    const filmes = [" "];
    const filmesImg = [" "];
    const overview = [" "];
    const released = [" "];
    const idFilme = [0];
    const rate = [0];


    info = json.results.filter ( filme => filme.backdrop_path != null && filme.overview != "")
                        .map ( filme => ({
                            'filme': filme.title,
                            'imagem': `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
                            'descricao': filme.overview,
                            'lancamento': filme.release_date,
                            'popularidade': filme.vote_average})
                        );
                        
    for(let i = 0; i < json.results.length; i++){
        if(json.results[i].backdrop_path != null && json.results[i].overview != ""){
            filmes.push( json.results[i].title );
            filmesImg.push(`https://image.tmdb.org/t/p/original/${json.results[i].backdrop_path}`);
            overview.push( json.results[i].overview);
            released.push( json.results[i].release_date);
            idFilme.push( json.results[i].id );
            parseFloat(rate.push( json.results[i].vote_average )); 
        }
        console.log(rate);
    }

    // CONTRÓI TODA ESTRUTURA HTML A PARTIR DO MÉTODO reduce
    const criarElemento = ( arr ) => {
        
        return arr.reduce((acc, elemento,i)=>
        `${acc}
        <div class="caixa">
            <div class="images">
                <img id="${i - 1}" src="${filmesImg[i]}" alt="backdrops">
            </div>
            <h2 class="nomeFilmes">${elemento}</h2>
            ${released[i]}
        </div>
        `
        );
    }
    $container.innerHTML = criarElemento(filmes);
}

const criarModal = ($el, id ,$fechar,$bg) => {
    $fechar.style = "z-index:999999;";
    $el.style = "z-index:2000;";
    $bg.style = "-webkit-filter: blur(15px);";

    $el.innerHTML = `
    <div id="modal">
        <div class="backdrop">
            <img src="${info[id].imagem}" alt="imagem">
        </div>
        <div class="informacoes">
            <h1>${info[id].filme}</h1>
            <p>
                ${info[id].descricao}
            </p>
            <div class="rate">
                ${criarEstrelas(info[id].popularidade)}
            </div>
        </div>
    </div>
    `;
}

const criarEstrelas = (rate) =>{
    var estrela = "";
    for(let i = 0; i < parseInt(rate); i+=2){
        estrela += `<img src="img/star.png">`;
    }
    return estrela;
}

const fecharModal = ($el, $fechar,$bg) => {
    $el.style = "opacity:0; transition:300ms;";
    $fechar.style = "z-index:-5;";
    $bg.style = "-webkit-filter: blur(0px);"
}


$container.addEventListener("click", (t) => { 
    caixaFilme = t.target.id;
    console.log(caixaFilme);

    if(caixaFilme != "containerFilmes" ){
        criarModal($containerModal, caixaFilme, $close, $contFilmes);
    }
});

mostrarFilmes("transformers");

$botao.addEventListener("click", () => mostrarFilmes(pesquisa.value));

$close.addEventListener("click", () => fecharModal($containerModal, $close,$contFilmes));
