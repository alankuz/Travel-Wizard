$("#new-city").on("click", function() {
    var cityImage = $('#city-input').val().trim();
    var URL = "https://api.giphy.com/v1/gifs/search?q=" + cityImage + "&api_key=MrqWaVNJjj1NZq05zK8EQhWWu2LAeOie&limit=10";
    console.log(cityImage);

    $.ajax({
        url: URL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        $("#image-view").html('<img src="' + response.data[0].images.original_still.url + '">')



    });
    return false;

});