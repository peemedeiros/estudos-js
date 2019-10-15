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
        const filmesImg = [" "];

        for(let i = 0; i < json.results.length; i++){
            if(json.results[i].backdrop_path != null){
                filmes.push( json.results[i].title );
                filmesImg.push( json.results[i].backdrop_path );
            }
        }

        console.log(filmes);
        console.log(filmesImg);

        
        const criarElemento = (arr) => {

            return arr.reduce((acc, elemento,i)=>
            `${acc}
            <div class="caixa">
                <h2 class="nomeFilme">
                   ${filmes[i]} 
                </h2>
                <img src="https://image.tmdb.org/t/p/original${elemento}" />
            </div>
            `
            );
        }

        $container.innerHTML = criarElemento(filmesImg, filmes);
    }
}


$botao.addEventListener("click", () => mostrarFilmes($pesquisa.value));







// const urlImg = `https://api.themoviedb.org/3/movie/${filmesId}/images?api_key=42ebeea476d0f2275d00448a81e47aa9&language=en-US`;
// fetch(urlImg)
// .then(res => res.json())
// .then(res => mostrarImagens( res ));

// const mostrarImagens = ( json ) => {
//     const imagensFilme = [];
//     for( let i = 0; i < json.length; i++){
//         imagensFilme.push( json[i] );
//     }
//     console.log(imagensFilme);
// } 

// const inserirImagens = (arr) => {
//     const htmlImg = arr.map( img => `<img src="${img}">` ).join(" ");

//     const $container = document.querySelector(".containerFilmes");
//     const $images = document.createElement("img");
//     $images.innerHTML = htmlImg;
//     $container.insertBefore($images);
// }

// inserirImagens(filmesImg);


