//pegando elementos do html
const $mostrar = document.getElementById('mostrar');
const $pesquisa = document.getElementById('pesquisa');
const $botao = document.getElementById('btnPesquisar');
const $caixa = document.querySelectorAll('.caixa');


//pega o valor digitado pelo usuario para realizar a pesquisa na API via 'GET /search/movie'
const mostrarFilmes = (pesquisado) => {

    //link para a requisição da API passando o parametro na query de pesquisa
    const url = `https://api.themoviedb.org/3/search/movie?api_key=42ebeea476d0f2275d00448a81e47aa9&language=pt-BR&query=${pesquisado}&page=1&include_adult=false`;
    
    //traz as 'promessas' da API então transforma em formato json e depois aplica a função mostrar()
    fetch(url)
    .then( res => res.json() )
    .then( res => mostrar( res ) );

    // funçao que tem como parametro um json.
    //são criados arrays que guardarão todos itens que forem encontrados nos parametros
    //que buscamos no json
    const mostrar = (json) =>{
        const $container = document.getElementById('containerFilmes');
        const filmes = [" "];
        const filmesImg = [" "];
        const overview = [" "];
        const released = [" "];
        const idFilme = [0];
        const rate = [0]

        //guarda todas informações que foram retornadas dos parametros do objeto json nos arrays
            for(let i = 0; i < json.results.length; i++){
                if(json.results[i].backdrop_path != null && json.results[i].overview != ""){
                    filmes.push( json.results[i].title );
                    filmesImg.push( json.results[i].backdrop_path );
                    overview.push( json.results[i].overview);
                    released.push( json.results[i].release_date);
                    idFilme.push( json.results[i].id );
                    parseFloat(rate.push( json.results[i].vote_average ));
                }
            }

        console.log(filmes);
        console.log(filmesImg);
        console.log(rate);
        console.log(idFilme);

        //recebe um array como base para criar toda estrutura no html
        const criarElemento = (arr) => {

            return arr.reduce((acc, elemento,i)=>
            `${acc}
            <div class="caixa">
                <div class="img">
                    <h2>${elemento}</h2>
                    <img src="https://image.tmdb.org/t/p/original/${filmesImg[i]}" alt="backdrops">
                </div>
            </div>
            `
            );
        }
        

        $container.innerHTML = criarElemento(filmes);
    }
}

const mostrarInfo = () => {

    const htmlInfo = () => { `
    <div class="moreInfoNet">
        <div class="nomeFilmes">TITULO</div>
        <div class="overview">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum corporis temporibus accusamus necessitatibus, harum cumque iusto reiciendis, dolorum soluta delectus aliquam fugiat sapiente. Porro nemo nesciunt incidunt voluptatum totam!</div>
        <div class="released">2222-22-22</div>
        <div class="barra_pop">
            <div class="progresso"> 20 %</div>
        </div>
     </div>
    `};

    const $caixaInfo = document.createElement('div');
    $caixaInfo.className = '.moreInfoNet';
    $caixaInfo.innerHTML = htmlInfo;
};

for(let i = 0; i < $caixa.length; i++){
    $caixa[i].addEventListener("click",() => mostrarInfo());
}

$botao.addEventListener("click", () => mostrarFilmes($pesquisa.value));


/* <div class="moreInfoNet">
    <div class="nomeFilmes">${elemento}</div>
    <div class="overview">${overview[i]}</div>
    <div class="released">${released[i]}</div>
    <div class="barra_pop">
        <div class="progresso" style="width:${rate[i] * 10}%;">${rate[i] * 10}%</div>
    </div>
</div> */

    
