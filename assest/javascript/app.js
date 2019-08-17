$('#submit').on("click", function() {
    var countryCode = $('#counrty').val().trim();
    for (var i = 0; i < object.length; i++) {
        if (countryCode === object[i].countryName) {
            console.log(object[i].code);
            break;
        }

    }
});