$("#submit").on('click', function () {
    var city = $('#location').val();
    console.log($('#location').val())
    var url = "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=" + city;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
            "x-rapidapi-key": "b2bff32602msh6bac28253bdbea6p19eb1cjsnef08e1be8d06"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(url)
        console.log(response);
        $('#airport-finder').html('<h4>Airports Near Your Location:</h4><p>' + response[0].countryCode + '</p>')
        for (i = 0; i < response.length; i++) {
            $('#airport-finder').append('<p>' + response[i].name + '</p>')
            $('#airport-finder').append('<p>' + response[i].code + '</p><hr>')

            var url = "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=" + capitalpush;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": url,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
                    "x-rapidapi-key": "b2bff32602msh6bac28253bdbea6p19eb1cjsnef08e1be8d06"
                }
            }
    
            $.ajax(settings).done(function (response) {
                console.log(url)
                console.log(response);
                console.log(capitalpush);
                $('#airport-finder').append('<h4>Airports Near Your Destination:</h4><p>'  + '</p>')
                for (i = 0; i < response.length; i++) {
                    $('#airport-finder').append('<p>' + response[i].name + '</p>')
                    $('#airport-finder').append('<p>' + response[i].code + '</p><hr>')
                }
    
    
    
            });
    
        }

  


    });
})
