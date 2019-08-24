//api.fixer.io/latest?symbols=USD,GBP can also be used as API
// Currency Converter Rapid API
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to=AUD&from=USD&amount=1",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
		"x-rapidapi-key": "582f3cf752msh20ec38705c92f1ep111733jsnbbafe234b199"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var usd, gbp, eur, cad, aud;
function init()
{
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    cad = document.getElementById("CAD");
    aud = document.getElementById("AUD");
}

function gbpfunc()
{
    usd.value = parseFloat(gbp.value) * 0.49246;
    eur.value = parseFloat(gbp.value) * 0.69714;
    cad.value = parseFloat(gbp.value) * 0.50221;
    aud.value = parseFloat(gbp.value) * 0.43497;
}

function eurfunc()
{
    gbp.value = parseFloat(eur.value) * 1.43448;
    usd.value = parseFloat(eur.value) * 0.70641;
    cad.value = parseFloat(eur.value) * 0.72037;
    aud.value = parseFloat(eur.value) * 0.62382;
}

function cadfunc()
{
    gbp.value = parseFloat(cad.value) * 1.99169;
    usd.value = parseFloat(cad.value) * 0.98054;
    eur.value = parseFloat(cad.value) * 1.38814;
    aud.value = parseFloat(cad.value) * 0.86613;
}

function audfunc()
{
    gbp.value = parseFloat(aud.value) * 2.29964;
    usd.value = parseFloat(aud.value) * 1.13262;
    eur.value = parseFloat(aud.value) * 1.60329;
    cad.value = parseFloat(aud.value) * 0.88297;    
}

function usdfunc()
{
    gbp.value = parseFloat(usd.value) * 2.03032;
    eur.value = parseFloat(usd.value) * 1.41544;
    cad.value = parseFloat(usd.value) * 1.01941;
    aud.value = parseFloat(usd.value) * 0.88297;
}

init();