const $mostrar = document.getElementById('mostrar');
const $pesquisa = document.getElementById('pesquisa');
const $botao = document.getElementById('btnPesquisar');

const mostrarFilmes = (pesquisado) => {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=42ebeea476d0f2275d00448a81e47aa9&language=en-US&query=${pesquisado}&page=1&include_adult=false`;
    
    fetch(url)
    .then( res => res.json() )
    .then( res => mostrar( res ) );

    const mostrar = (json) =>{
        const $container = document.querySelector(".containerFilmes");
        const filmes = [" "];
        const filmesId = [];

        for(let i = 0; i < json.results.length; i++){
            filmes.push( json.results[i].title );
            filmesId.push( json.results[i].id );
        }
        console.log(filmes);
        console.log(filmesId);

        $container.innerHTML = criarElemento(filmes);
    }
}
const criarElemento = (arr) => {
    return arr.reduce((acc, title, i)=>
    `${acc}
    <div class="caixa">
        <h2 id="nomeFilme">
            ${title}
        </h2>
        <img />
    </div>
    `
    );
}

$botao.addEventListener("click", () => mostrarFilmes($pesquisa.value));




