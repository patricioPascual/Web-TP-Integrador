function validateForm() {
    
    let nombre = document.forms["form"]["nombre"].value;
    let telefono = document.forms["form"]["telefono"].value;
    let mail = document.forms["form"]["mail"].value;
    let consulta = document.forms["form"]["consulta"].value;

    //.trim() Sirve para eliminar espacios en blanco al inicio y al final. "tuve que añadirlo ya que sin ello me estaba dando problemas"
    //Así, un campo con solo espacios se considerará vacío.
    
    if (nombre.trim() == "") {
        alert("Por favor, completa el campo Nombre.");
        // return false detiene el envío del formulario.
        return false; 
    }

    if (telefono.trim() == "") {
        alert("Por favor, completa el campo Teléfono.");
        return false;
    }

    if (mail.trim() == "") {
        alert("Por favor, completa el campo Email.");
        return false;
    }

    if (consulta.trim() == "") {
        alert("Por favor, escribe tu Consulta.");
        return false;
    }

    // Si todas las validaciones pasan, la función termina sin retornar 'false',
    // permitiendo que el formulario se envíe.
    alert("¡Consulta enviada!");
    return true;
}