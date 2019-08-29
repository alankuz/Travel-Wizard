// When the button is pressed this will find airports for destination and the origin location 
$("#submit").on('click', function () {
    var city = $('#location').val();
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
        $('#airport-finder').empty();
        $('#airport-finder').html('<h4><i class="material-icons prefix">flight</i> Airports Near You:</h4><p>Origin: ' + response[0].countryCode + '</p>')
        for (i = 0; i < response.length; i++) {
            $('#airport-finder').append('<p>Airport: ' + response[i].name + '</p>')
            $('#airport-finder').append('<p>Airport Code: ' + response[i].code + '</p><hr>')
        }
        // Desination ajax request 

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
            $('#airport-finder').append('<h5><i class="material-icons prefix">flight_land</i> Airports Near Destination:</h5><p>' + '</p>')
            for (i = 0; i < response.length; i++) {
                $('#airport-finder').append('<p>Airport: ' + response[i].name + '</p>')
                $('#airport-finder').append('<p>Airport Code: ' + response[i].code + '</p><hr>')
            }
        });
    });
})
