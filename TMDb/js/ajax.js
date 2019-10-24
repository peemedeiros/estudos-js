
$(function (){
    $.ajax({
        type:"GET",
        url:"https://api.themoviedb.org/3/movie/500?api_key=42ebeea476d0f2275d00448a81e47aa9&language=en-US",
        success:function(data){
            $('.modal').append('<h1>'+data.original_title+'</h1>');
        }
    });
})
