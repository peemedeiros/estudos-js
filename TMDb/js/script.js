//BUSCANDO ELEMENTOS DO HTML
const $mostrar = document.getElementById('mostrar');
const $pesquisa = document.getElementById('pesquisa');
const $botao = document.getElementById('botao');
const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $container = document.getElementById('containerFilmes');
const $containerModal = document.getElementById('containerModal');
const $close = document.getElementById('close');


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

const criarModal = ($el, id ,$fechar) => {
    // $el.innerHTML += info[id].filme + info[id].imagem;
    $fechar.style = "z-index:999999;";
    $el.style = "z-index:2000;";
    
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
    // const fecharModal = () => {
        
    //     $el.style = 'z-index:-5;';
    // }
    // $fechar.addEventListener("click", fecharModal($containerModal));

}
const criarEstrelas = (rate) =>{
    var estrela = ""
    for(let i = 0; i < parseInt(rate); i+=2){
        estrela += `<img src="img/star.png">`;
    }
    return estrela;
}


$container.addEventListener("click", (t) => { 
    caixaFilme = t.target.id;
    console.log(caixaFilme);

    if(caixaFilme != "containerFilmes" ){
        criarModal($containerModal, caixaFilme, $close);
    }

});

const fecharModal = ($el, $fechar) => {
    $el.style = "z-index: -5 ;";
    $fechar.style = "z-index:-5;";
}

mostrarFilmes("transformers");

$botao.addEventListener("click", () => mostrarFilmes(pesquisa.value));

$close.addEventListener("click", () => fecharModal($containerModal, $close));












// const mostrarNaModal = (json) =>{
//     const modalImagem = [" "];
//     for(let i = 0; i< json.results.length; i++){
//         modalImagem.push(`https://image.tmdb.org/t/p/original/${json.results[i].backdrop_path}`);
//     }
// }
// const criarElementoModal = ( arr ) => {
//     return arr.reduce((acc, elemento,i) =>
//     `${acc}
//         <div class="backdrop">
//             <img src="${elemento}" alt="imagem">
//         </div>
//         <div class="informacoes">
//             <h1></h1>
//         </div>
//     `
//     );
// }
// $containerModal.innerHTML = criarElementoModal(modalImagem);























/*  */

    
// const insertCaixa = (arr, $elemento) => {
//     const htmlCaixa = arr.map(div => `<div class="caixa">${div}</div>`);

//     const $containerSlider = document.getElementById('containerSlider');
//     const $containerCaixa = document.createElement('div');
//     $containerCaixa.id = "containerFilmes";
//     $containerCaixa.innerHTML = htmlCaixa;

//     $containerCaixa.insertBefore($containerSlider, $elemento);
// }

// insertCaixa(filmes, next);

{/* <div class="progresso" style="width:${rate[i] * 10}%;">${rate[i] * 10}%</div> */}





//CONTRÓI TODA ESTRUTURA HTML A PARTIR DO MÉTODO reduce
// const criarElemento = (arr) => {
//     return arr.reduce((acc, elemento,i)=>
//     `${acc}

//     <div class="caixa">
//         <div class="img">
//             <h2>${elemento}</h2>
//             <img src="https://image.tmdb.org/t/p/original/${filmesImg[i]}" alt="backdrops">
//         </div>
//         <div class="moreInfoNet">
//             <div class="nomeFilmes">${elemento}</div>
//             <div class="overview">${overview[i]}</div>
//             <div class="released">${released[i]}</div>
//             <div class="barra_pop">
                
//             </div>
//         </div>
//     </div>
    
//     `
//     );
// }