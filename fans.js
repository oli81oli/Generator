function muestra_oculta(e) {
    let el = document.getElementById(e);

    if (el.style.display == 'none') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}
window.onload = function() {
    muestra_oculta('contenido');
    show_tour('tour');
    show_alert('alert')
}


function show_alert(sign) {
    let button = document.getElementById(sign);
    let city = document.getElementById("inputCity");
    cityValue = city.value.length
    if (cityValue >= 1) {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
}
show_alert('alert')