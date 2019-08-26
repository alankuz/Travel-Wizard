// This pushes the capital to other API
var capitalpush;

// List of countries 
var countrylist = [
    country = {
        countryName: "Andorra"
    },
    country = {
        countryName: "United Arab Emirates"
    },
    country = {
        countryName: "Afghanistan"
    },
    country = {
        countryName: "Antigua and Barbuda"
    },
    country = {
        countryName: "Anguilla"
    },
    country = {
        countryName: "Albania"
    },
    country = {
        countryName: "Armenia"
    },
    country = {
        countryName: "Angola"
    },
    country = {
        countryName: "Argentina"
    },
    country = {
        countryName: "American Samoa"
    },
    country = {
        countryName: "Austria"
    },
    country = {
        countryName: "Australia"
    },
    country = {
        countryName: "Aruba"
    },
    country = {
        countryName: "Azerbaijan"
    },
    country = {
        countryName: "Bosnia and Herzegovina"
    },
    country = {
        countryName: "Barbados"
    },
    country = {
        countryName: "Bangladesh"
    },
    country = {
        countryName: "Belgium"
    },
    country = {
        countryName: "Burkina Faso"
    },
    country = {
        countryName: "Bulgaria"
    },
    country = {
        countryName: "Bahrain"
    },
    country = {
        countryName: "Burundi"
    },
    country = {
        countryName: "Benin"
    },
    country = {
        countryName: "Saint Barthélemy"
    },
    country = {
        countryName: "Bermuda"
    },
    country = {
        countryName: "Brunei"
    },
    country = {
        countryName: "Bolivia"
    },
    country = {
        countryName: "Brazil"
    },
    country = {
        countryName: "Bahamas"
    },
    country = {
        countryName: "Bhutan"
    },
    country = {
        countryName: "Botswana"
    },
    country = {
        countryName: "Belarus"
    },
    country = {
        countryName: "Belize"
    },
    country = {
        countryName: "Canada"
    },
    country = {
        countryName: "Cocos Islands"
    },
    country = {
        countryName: "Democratic Republic of the Congo"
    },
    country = {
        countryName: "Central African Republic"
    },
    country = {
        countryName: "Republic of the Congo"
    },
    country = {
        countryName: "Switzerland"
    },
    country = {
        countryName: "Ivory Coast"
    },
    country = {
        countryName: "Cook Islands"
    },
    country = {
        countryName: "Chile"
    },
    country = {
        countryName: "Cameroon"
    },
    country = {
        countryName: "China"
    },
    country = {
        countryName: "Colombia"
    },
    country = {
        countryName: "Costa Rica"
    },
    country = {
        countryName: "Cuba"
    },
    country = {
        countryName: "Cape Verde"
    },
    country = {
        countryName: "Christmas Island"
    },
    country = {
        countryName: "Cyprus"
    },
    country = {
        countryName: "Czech Republic"
    },
    country = {
        countryName: "Germany"
    },
    country = {
        countryName: "Djibouti"
    },
    country = {
        countryName: "Denmark"
    },
    country = {
        countryName: "Dominica"
    },
    country = {
        countryName: "Dominican Republic"
    },
    country = {
        countryName: "Algeria"
    },
    country = {
        countryName: "Ecuador"
    },
    country = {
        countryName: "Estonia"
    },
    country = {
        countryName: "Egypt"
    },
    country = {
        countryName: "Western Sahara"
    },
    country = {
        countryName: "Eritrea"
    },
    country = {
        countryName: "Spain"
    },
    country = {
        countryName: "Ethiopia"
    },
    country = {
        countryName: "Finland"
    },
    country = {
        countryName: "Fiji"
    },
    country = {
        countryName: "Falkland Islands"
    },
    country = {
        countryName: "Micronesia"
    },
    country = {
        countryName: "Faroe Islands"
    },
    country = {
        countryName: "France"
    },
    country = {
        countryName: "Gabon"
    },
    country = {
        countryName: "United Kingdom"
    },
    country = {
        countryName: "Grenada"
    },
    country = {
        countryName: "Georgia"
    },
    country = {
        countryName: "French Guiana"
    },
    country = {
        countryName: "Guernsey"
    },
    country = {
        countryName: "Ghana"
    },
    country = {
        countryName: "Gibraltar"
    },
    country = {
        countryName: "Greenland"
    },
    country = {
        countryName: "Gambia"
    },
    country = {
        countryName: "Guinea"
    },
    country = {
        countryName: "Guadeloupe"
    },
    country = {
        countryName: "Equatorial Guinea"
    },
    country = {
        countryName: "Greece"
    },
    country = {
        countryName: "South Georgia and the South Sandwich Islands"
    },
    country = {
        countryName: "Guatemala"
    },
    country = {
        countryName: "Guam"
    },
    country = {
        countryName: "Guinea-Bissau"
    },
    country = {
        countryName: "Guyana"
    },
    country = {
        countryName: "Hong Kong"
    },
    country = {
        countryName: "Honduras"
    },
    country = {
        countryName: "Croatia"
    },
    country = {
        countryName: "Haiti"
    },
    country = {
        countryName: "Hungary"
    },
    country = {
        countryName: "Indonesia"
    },
    country = {
        countryName: "Ireland"
    },
    country = {
        countryName: "Israel"
    },
    country = {
        countryName: "Isle of Man"
    },
    country = {
        countryName: "India"
    },
    country = {
        countryName: "Iraq"
    },
    country = {
        countryName: "Iran"
    },
    country = {
        countryName: "Iceland"
    },
    country = {
        countryName: "Italy"
    },
    country = {
        countryName: "Jersey"
    },
    country = {
        countryName: "Jamaica"
    },
    country = {
        countryName: "Jordan"
    },
    country = {
        countryName: "Japan"
    },
    country = {
        countryName: "Kenya"
    },
    country = {
        countryName: "Kyrgyzstan"
    },
    country = {
        countryName: "Cambodia"
    },
    country = {
        countryName: "Kiribati"
    },
    country = {
        countryName: "Comoros"
    },
    country = {
        countryName: "Saint Kitts and Nevis"
    },
    country = {
        countryName: "North Korea"
    },
    country = {
        countryName: "South Korea"
    },
    country = {
        countryName: "Kuwait"
    },
    country = {
        countryName: "Cayman Islands"
    },
    country = {
        countryName: "Kazakhstan"
    },
    country = {
        countryName: "Laos"
    },
    country = {
        countryName: "Lebanon"
    },
    country = {
        countryName: "Saint Lucia"
    },
    country = {
        countryName: "Liechtenstein"
    },
    country = {
        countryName: "Sri Lanka"
    },
    country = {
        countryName: "Liberia"
    },
    country = {
        countryName: "Lesotho"
    },
    country = {
        countryName: "Lithuania"
    },
    country = {
        countryName: "Luxembourg"
    },
    country = {
        countryName: "Latvia"
    },
    country = {
        countryName: "Libya"
    },
    country = {
        countryName: "Morocco"
    },
    country = {
        countryName: "Monaco"
    },
    country = {
        countryName: "Moldova"
    },
    country = {
        countryName: "Montenegro"
    },
    country = {
        countryName: "Saint Martin"
    },
    country = {
        countryName: "Madagascar"
    },
    country = {
        countryName: "Marshall Islands"
    },
    country = {
        countryName: "Macedonia"
    },
    country = {
        countryName: "Mali"
    },
    country = {
        countryName: "Myanmar"
    },
    country = {
        countryName: "Mongolia"
    },
    country = {
        countryName: "Macao"
    },
    country = {
        countryName: "Northern Mariana Islands"
    },
    country = {
        countryName: "Martinique"
    },
    country = {
        countryName: "Mauritania"
    },
    country = {
        countryName: "Montserrat"
    },
    country = {
        countryName: "Malta"
    },
    country = {
        countryName: "Mauritius"
    },
    country = {
        countryName: "Maldives"
    },
    country = {
        countryName: "Malawi"
    },
    country = {
        countryName: "Mexico"
    },
    country = {
        countryName: "Malaysia"
    },
    country = {
        countryName: "Mozambique"
    },
    country = {
        countryName: "Namibia"
    },
    country = {
        countryName: "New Caledonia"
    },
    country = {
        countryName: "Niger"
    },
    country = {
        countryName: "Norfolk Island"
    },
    country = {
        countryName: "Nigeria"
    },
    country = {
        countryName: "Nicaragua"
    },
    country = {
        countryName: "Netherlands"
    },
    country = {
        countryName: "Norway"
    },
    country = {
        countryName: "Nepal"
    },
    country = {
        countryName: "Niue"
    },
    country = {
        countryName: "New Zealand"
    },
    country = {
        countryName: "Oman"
    },
    country = {
        countryName: "Panama"
    },
    country = {
        countryName: "Peru"
    },
    country = {
        countryName: "French Polynesia"
    },
    country = {
        countryName: "Papua New Guinea"
    },
    country = {
        countryName: "Philippines"
    },
    country = {
        countryName: "Pakistan"
    },
    country = {
        countryName: "Poland"
    },
    country = {
        countryName: "Saint Pierre and Miquelon"
    },
    country = {
        countryName: "Pitcairn"
    },
    country = {
        countryName: "Puerto Rico"
    },
    country = {
        countryName: "Palestinian Territory"
    },
    country = {
        countryName: "Portugal"
    },
    country = {
        countryName: "Palau"
    },
    country = {
        countryName: "Paraguay"
    },
    country = {
        countryName: "Qatar"
    },
    country = {
        countryName: "Reunion"
    },
    country = {
        countryName: "Romania"
    },
    country = {
        countryName: "Serbia"
    },
    country = {
        countryName: "Russia"
    },
    country = {
        countryName: "Rwanda"
    },
    country = {
        countryName: "Saudi Arabia"
    },
    country = {
        countryName: "Solomon Islands"
    },
    country = {
        countryName: "Seychelles"
    },
    country = {
        countryName: "Sudan"
    },
    country = {
        countryName: "Sweden"
    },
    country = {
        countryName: "Singapore"
    },
    country = {
        countryName: "Saint Helena"
    },
    country = {
        countryName: "Slovenia"
    },
    country = {
        countryName: "Svalbard and Jan Mayen"
    },
    country = {
        countryName: "Slovakia"
    },
    country = {
        countryName: "Sierra Leone"
    },
    country = {
        countryName: "San Marino"
    },
    country = {
        countryName: "Senegal"
    },
    country = {
        countryName: "Somalia"
    },
    country = {
        countryName: "Suriname"
    },
    country = {
        countryName: "South Sudan"
    },
    country = {
        countryName: "Sao Tome and Principe"
    },
    country = {
        countryName: "El Salvador"
    },
    country = {
        countryName: "Syria"
    },
    country = {
        countryName: "Swaziland"
    },
    country = {
        countryName: "Turks and Caicos Islands"
    },
    country = {
        countryName: "Chad"
    },
    country = {
        countryName: "Togo"
    },
    country = {
        countryName: "Thailand"
    },
    country = {
        countryName: "Tajikistan"
    },
    country = {
        countryName: "East Timor"
    },
    country = {
        countryName: "Turkmenistan"
    },
    country = {
        countryName: "Tunisia"
    },
    country = {
        countryName: "Tonga"
    },
    country = {
        countryName: "Turkey"
    },
    country = {
        countryName: "Trinidad and Tobago"
    },
    country = {
        countryName: "Tuvalu"
    },
    country = {
        countryName: "Taiwan"
    },
    country = {
        countryName: "Tanzania"
    },
    country = {
        countryName: "Ukraine"
    },
    country = {
        countryName: "Uganda"
    },
    country = {
        countryName: "United States"
    },
    country = {
        countryName: "Uruguay"
    },
    country = {
        countryName: "Uzbekistan"
    },
    country = {
        countryName: "Vatican"
    },
    country = {
        countryName: "Saint Vincent and the Grenadines"
    },
    country = {
        countryName: "Venezuela"
    },
    country = {
        countryName: "British Virgin Islands"
    },
    country = {
        countryName: "U.S. Virgin Islands"
    },
    country = {
        countryName: "Vietnam"
    },
    country = {
        countryName: "Vanuatu"
    },
    country = {
        countryName: "Wallis and Futuna"
    },
    country = {
        countryName: "Samoa"
    },
    country = {
        countryName: "Kosovo"
    },
    country = {
        countryName: "Yemen"
    },
    country = {
        countryName: "Mayotte"
    },
    country = {
        countryName: "South Africa"
    },
    country = {
        countryName: "Zambia"
    },
    country = {
        countryName: "Zimbabwe",
    }
];
// Connects the searched country to the list above 
for (var i = 0; i < countrylist.length; i++) {
    $('#search').append('<option value="' + countrylist[i].countryName + '">')
}

// Button wave effect 
$('.waves-effect').on("click", function () {
    var countryCode = $('#country').val().trim();
    $('#slideshow').slideUp();
    var cityFinder = {
        "async": true,
        "crossDomain": true,
        "url": "https://restcountries-v1.p.rapidapi.com/name/" + countryCode,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key": "0ab4861ed5msh7509d0944643336p175260jsne5c4b2a93083"
        }
    }

    // Api Ajax Request 
    $.ajax(cityFinder).done(function (city) {
        var countries = city[0].name;
        var countryNative = city[0].nativeName;
        var countryCapital = city[0].capital;
        capitalpush = countryCapital
        var countryCurrency = city[0].currencies[0];
        var counrtyCallingCode = city[0].callingCodes;
        var amount = $("#money").val();

        var currencyFinder = {
            "async": true,
            "crossDomain": true,
            "url": "https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=USD&to=" + countryCurrency,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
                "x-rapidapi-key": "0ab4861ed5msh7509d0944643336p175260jsne5c4b2a93083"
            }
        }
        // Pushes info into the divs 
        $("#display-search").html("<h4> Native country name: <b>" + countryNative + "</b></h4>");
        $("#display-search").append("<h4> Capital city: <b>" + countryCapital + "</b></h4>")

        $.ajax(currencyFinder).done(function (currency) {
            var userMoney = parseInt(currency * amount)
            $("#display-search").append("<h5>Your budget converts to: <b>" + userMoney + " " + countryCurrency + "</b></h5>")
        });

        var rating = city[0].alpha2Code;
        var queryURL = 'https://www.travel-advisory.info/api?countrycode=' + rating;
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (rate) {
                var countryRate = rate.data[rating].advisory.score;
                $('.safety').empty();
                $('#rating').empty();
                $('.safety').append("<h4><em>How safe is your destination?</em></h4>");
                if (countryRate < 2) {
                    $('#rating').html("<h5><i class='material-icons prefix'>mood</i> This destination is safe - nothing to worry about. <i class='material-icons prefix'>mood</i></h5>")
                } if (countryRate >= 2 && countryRate < 3) {
                    $("#rating").html("<h5><i class='material-icons prefix'>sentiment_neutral</i> This country is slightly dangerous. Be cautious! <i class='material-icons prefix'>sentiment_neutral</i></h5>")
                } if (countryRate >= 3 && countryRate < 4) {
                    $("#rating").html("<h5><i class='material-icons prefix'>thumb_down</i> This country is very dangerous, you may want to hire private security. <i class='material-icons prefix'>thumb_down</i></h5>")
                } if (countryRate >= 4 && countryRate <= 5) {
                    $("#rating").html("<h4><i class='material-icons prefix'>pan_tool</i> We recommend you stay away, possible conflict-zone. <i class='material-icons prefix'>pan_tool</i></h4>").addClass('blink');
                }
            });

    });

    return false;

});
