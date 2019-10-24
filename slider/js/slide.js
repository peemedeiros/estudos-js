const $prev = document.getElementById("prev");
const $next = document.getElementById("next");

const loadImages = () => {
    const arrImg = [];
    for ( let i = 1 ; i <= 5; i++){
        arrImg.push( `./img/imagem (${i}).jpg` );
    }
    return arrImg;
}

const insertSlide = ( arr, $el ) => {
    
    const htmlImg = arr.map( img => `<img class="images" src="${img}">` ).join(" ");
    
    const $container = document.getElementById("container");
    const $containerImages = document.createElement("div");
    $containerImages.id = "containerImages";
    $containerImages.innerHTML = htmlImg;
    $container.insertBefore($containerImages, $el); 
}

const next = () => {
    const $img = document.querySelectorAll(".images");
    const max = (50 * ($img.length - 1)) * -1;
    const min = 0;

    let marginLeft = $img[0].style.marginLeft.replace("vw", "");

    marginLeft = marginLeft == max ? min : marginLeft - 50 ;

    $img[0].style.marginLeft = `${marginLeft}vw`;
}

const prev = () => {
    const $img = document.querySelectorAll(".images");
    const max = (50 * ($img.length - 1)) * -1;
    const min = 0;

    let marginLeft = $img[0].style.marginLeft.replace("vw", "");
    
    marginLeft = marginLeft == min ? max : parseInt(marginLeft) + 50 ;


    $img[0].style.marginLeft = `${marginLeft}vw`;
}


setInterval(prev, 5000);

insertSlide( loadImages(), $next);

$next.addEventListener('click', next);
$prev.addEventListener('click', prev);