//pegando elementos do html
const $mostrar = document.getElementById('mostrar');
const $pesquisa = document.getElementById('pesquisa');
const $botao = document.getElementById('btnPesquisar');
const $caixa = document.querySelectorAll('.caixa');
const $caixaInfo = document.querySelectorAll('.moreInfoNet');


//pega o valor digitado pelo usuario para realizar a pesquisa na API via 'GET /search/movie'
const mostrarFilmes = (pesquisado) => {

    //link para a requisição da API passando o parametro na query de pesquisa
    const url = `https://api.themoviedb.org/3/search/movie?api_key=42ebeea476d0f2275d00448a81e47aa9&language=pt-BR&query=${pesquisado}&page=1&include_adult=false`;
    
    //traz as 'promessas' da API então transforma em formato json e depois aplica a função mostrar()
    fetch(url)
    .then( res => res.json())
    .then( res => mostrar( res ));

    // funçao que tem como parametro um json.
    //são criados arrays que guardarão todos itens que forem encontrados nos parametros
    //que buscamos no json
    const mostrar = (json) =>{
        const $container = document.querySelector(".containerFilmes");
        const filmes = [" "];
        const filmesImg = [" "];
        const overview = [" "];
        const released = [" "];
        const rate = [0];

        //guarda todas informações que foram retornadas dos parametros do objeto json nos arrays
            for(let i = 0; i < json.results.length; i++){
                if(json.results[i].backdrop_path != null && json.results[i].overview != ""){
                    filmes.push( json.results[i].title );
                    filmesImg.push( json.results[i].backdrop_path );
                    overview.push( json.results[i].overview);
                    released.push( json.results[i].release_date);
                    parseFloat(rate.push( json.results[i].vote_average ));
                }
            }

        console.log(filmes);
        console.log(filmesImg);
        console.log(rate);

        //recebe um array como base para criar toda estrutura no html
        const criarElemento = (arr) => {

            return arr.reduce((acc, elemento,i)=>
            `${acc}
            <div class="caixa">
                <h2 class="nomeFilme">
                    ${elemento}
                </h2>
                <img src="https://image.tmdb.org/t/p/original${filmesImg[i]}" />

                <div class="moreInfo">
                    <h3 class="subtitulo"> sinópse </h3>
                    <div class="overview">
                        ${overview[i]}
                    </div>
                    <h3 class="subtitulo"> lançado em </h3>
                    <div class="released">
                        ${released[i]}
                    </div>
                    <h3 class="subtitulo"> popularidade </h3>
                    <div class="barra_pop">
                        <div class="progress" style="width: ${rate[i] * 10}%;
                         height: 28;
                         background-color: rgb(77, 59, 134);
                         text-align: center;
                         box-sizing: border-box;
                         padding-top: 6px;
                         color: #fff;
                         border-radius:4px;
                         font-weight:bold;  >
                            ${rate[i] * 10}%
                         </div>
                    </div>
                </div>
            </div>
            `
            );
        }

        $container.innerHTML = criarElemento(filmes);
    }
}
$botao.addEventListener("click", () => mostrarFilmes($pesquisa.value));

