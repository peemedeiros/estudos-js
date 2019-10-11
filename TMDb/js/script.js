const $mostrar = document.getElementById('mostrar');

const url = "https://api.themoviedb.org/3/movie/157336?api_key=42ebeea476d0f2275d00448a81e47aa9&append_to_response=videos,images";


fetch(url)
.then(res => res.json())

const loadImages = (json) => {
    json.images
}