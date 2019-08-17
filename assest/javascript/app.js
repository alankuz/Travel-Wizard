var object = [
    country = {
        name: "Armenia",
        code: "AM"
    },
    country = {
        name: "USA",
        code: "US"
    },
    country = {
        name: "Russia",
        code: "RU"
    }
]



$('#submit').on("click", function() {
    var countryCode = $('#counrty').val().trim();
    for (var i = 0; i < object.length; i++) {
        if (countryCode === object[i].name) {
            console.log(object[i].code);
            break;
        }

    }
});