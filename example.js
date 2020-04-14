{
    // Declaramos las variable.

    let nombre;
    let lbNombre;
    let formulario;
    let enviaFormulario;
    let init = function() {
        // Almacenando los elementos, en sus respectivas variables.
        formulario = document.getElementById("formulario");
        nombre = document.getElementById("inputNombre");
        lbNombre = document.getElementById("lbNombre");
        enviaFormulario = document.getElementById("enviaFormulario");
        // Asignamos que al perder el foco haga una función.
        nombre.addEventListener("blur", validarNombre);
        // Asiganmos el evento click al boton que enviaría el formulario,
        // y le quitamos la acción de enviar el formulario que tendría por defecto,
        // y llamamos a la función validar(), la cuál validará los campos.
        enviaFormulario.addEventListener("click", function(event) {
            event.preventDefault();
            validar();
        });
    };
    /**
     * Validará un nombre.
     */
    let validarNombre = function() {
        let valorNombre = nombre.value;
        if (valorNombre === "") {
            lbNombre.innerHTML = "El nombre no puede estar vacío";
            return false;
        } else if (valorNombre.length == 1) {
            lbNombre.innerHTML = "El nombre introducido es muy corto";
            return false;
        } else {
            lbNombre.innerHTML = "";
            return true;
        }
    };
    /**
     * Realizará la validación de todos los campos y apuntará el foco sobre el primer
     * campo que contenga errores.
     */
    let validar = function() {
        if (!validarNombre()) {
            nombre.focus();

        } else {
            alert("Se enviaría el formulario correctamente");

            //si descomentamos la siguiente línea se enviaría el formulario a la ruta del action indicada
            //formulario.submit();
        }
    };

    window.onload = init;
}

function show_alert(sign) {
    let city = document.getElementById('inputCity');

    let email = document.getElementById('inputEmail4');
    let okEmail = email.value;
    let ifEmail = new RegExp("[a-zA-Z0-9_.-]+@+[a-zA-Z0-9_.-]+.+[a-zA-Z]{2,4}");

    let address = document.getElementById("inputAddress");
    let okAddress = address.value;
    let ifAddress = new RegExp("[a-zA-Z0-9/,ºª]");

    let state = document.getElementById("inputState");

    let zip = document.getElementById("inputZip");
    let okZip = zip.value;
    let ifZip = new RegExp("[0-9]");


    if (ifEmail.test(okEmail) && ifAddress.test(okAddress) && city.value.length > 0 && state.value.length > 0 && ifZip.test(okZip)) {

        alert('It has been successfully registred')
    } else {
        alert('somenthing went wrong')
    }
}
show_alert('alert')

// Email
function show_alert(alert) {
    let validEmail = document.getElementById('msg-email');
    let email = document.getElementById('inputEmail4');
    let okEmail = email.value;
    let ifEmail = new RegExp("[a-zA-Z0-9_.-]+@+[a-zA-Z0-9_.-]+.+[a-zA-Z]{2,4}");
    if (ifEmail.test(okEmail)) {
        validEmail.style.display = 'none'
    } else {
        validEmail.style.display = 'block';
    }
}
show_alert('alert');

//Address
function show_alert(alert) {
    let address = document.getElementById("inputAddress");
    let validAddress = document.getElementById('msg-address');
    let okAddress = address.value;
    let ifAddress = new RegExp("[a-zA-Z0-9/,ºª]");
    if (ifAddress.test(okAddress)) {
        validAddress.style.display = 'none'
    } else {
        validAddress.style.display = 'block';
    }
}
show_alert('alert');

//City
function show_alert(alert) {
    let city = document.getElementById('inputCity');
    let validCity = document.getElementById('msg-city');
    if (city.value.length > 0) {
        validCity.style.display = 'none';
    } else {
        validCity.style.display = 'block';
    }
}
show_alert('alert');

//State
function show_alert(alert) {
    let state = document.getElementById("inputState");
    let validState = document.getElementById('msg-state')
    if (state.value.length > 0) {
        validState.style.display = 'none';
    } else {
        validState.style.display = 'block';
    }
}
show_alert('alert');

//Zip
function() {
    let zip = document.getElementById("inputZip");
    let validZip = document.getElementById('msg-zip');
    let okZip = zip.value;
    let ifZip = new RegExp("[0-9]");
    if (ifZip.test(okZip)) {
        validZip.style.display = 'none';
    } else {
        validZip.style.display = 'block';
    }
}