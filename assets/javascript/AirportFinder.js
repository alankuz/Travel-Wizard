window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
    //   document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    //   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };
  $("#submit").on('click', function () {
      var city = $('#location').val();
      var url = "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text="+ city;
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
              $('#display').html('<h1>Airports Near Your Location:</h1><p>' + response[0].countryCode + '</p>')
              for (i=0; i<response.length; i++){
              $('#display').append('<p>' + response[i].name + '</p>')
              $('#display').append('<p>' + response[i].code + '</p><hr>')
              }
  
  
  
          });})