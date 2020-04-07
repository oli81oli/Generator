function show_tour(id) {
    let theTour = document.getElementById(id);

    if (theTour.style && theTour.style.display == 'none') {
        theTour.style.display = 'block';
    } else {
        theTour.style.display = 'none';
    }
}
window.onload = function() {
    show_tour('tour');
    muestra_oculta('contenido');
}