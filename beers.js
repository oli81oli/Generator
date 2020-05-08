let http_request = false;

function makeRequest(url) {
    let http_request = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                // alert(http_request.responseText);
                const beers = JSON.parse(http_request.response);
                const image_url = beers[0].image_url;
                // console.log(image_url)
                let photo = document.getElementById('show_beer');
                photo.src = image_url;


            } else {
                alert('Hubo problemas con la petición.');
            }
        }
    }

    http_request.open('GET', url, true);
    http_request.send();



}

// makeRequest('https://api.punkapi.com/v2/beers/random')