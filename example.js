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