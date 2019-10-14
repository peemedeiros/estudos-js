const $mostrar = document.getElementById('mostrar');

const url = "https://api.themoviedb.org/3/movie/157336?api_key=42ebeea476d0f2275d00448a81e47aa9&append_to_response=videos,images";


fetch(url)
.then( res => res.json() )
.then( res => loadVideos( res ) );

const loadVideos = ( json ) => {
    const arrVid = [];

    for ( let i = 0 ; i <= 8; i++){
        arrVid.push( json.videos.results[i]);
    }
    arrVid.map(img()).join(" ");
    console.log(arrVid);
    return arrVid;
}

const img = () => "<img />"

const resultado = ( arr, $el ) => {

    const $container = document.querySelector('.container');
    const $videoContainer = document.createElement('div');
    $videoContainer.id = "videoContainer";
}



