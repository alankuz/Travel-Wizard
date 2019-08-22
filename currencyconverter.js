//Currency Converter API
var unirest = require("unirest");

var req = unirest("GET", "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09");

req.query({
	"format": "json",
	"to": "AUD",
	"from": "AUD",
	"amount": "1"
});

req.headers({
	"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
	"x-rapidapi-key": "582f3cf752msh20ec38705c92f1ep111733jsnbbafe234b199"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});