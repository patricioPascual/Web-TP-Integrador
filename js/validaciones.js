function validar() {
    
    let nombre = document.forms["form"]["nombre"];
    let telefono = document.forms["form"]["telefono"];
    let mail = document.forms["form"]["mail"];
    let consulta = document.forms["form"]["consulta"];
    
    const regexNombre= /^[A-Za-z\s]+$/
    const regexTel=/^\+?[0-9]{7,20}$/
    const regexMail= /^\w+@\w+\.com(\.ar)?$/
    const regexConsulta= /^[\s\S]{10,150}$/
    if (regexNombre.test(nombre.value)) {
        nombre.style.color='white'; 
        nombre.style.backgroundColor = '';

    }else{
        nombre.style.color='red';
        nombre.style.backgroundColor='white';
    }

    if (regexTel.test(telefono.value)) {
        
        telefono.style.color='white';
        telefono.style.backgroundColor = '';
    }else{
        telefono.style.color='red';
        telefono.style.backgroundColor='white';
    }

    if (regexMail.test(mail.value)) {
       mail.style.color='white';
       mail.style.backgroundColor = '';

    }else{
        mail.style.color='red';
         mail.style.backgroundColor='white';
    }

    if (regexConsulta.test(consulta.value)) {
       consulta.style.color='white';
       consulta.style.backgroundColor = '';
    }else{
        consulta.style.color='red';
         consulta.style.backgroundColor='white';
    }

    
    return false;
}

const ARREGLO_DE_IMAGENES = [
    'img/sushi.jpg',
    'img/sushi2.jpg',
    'img/plato.jpg',
    'img/canapes.jpg'
];



let posicionActual = 0; 

function actualizarImagen() {
    
    const imgElemento = document.getElementById('carrusel-imagen');
    
    
    imgElemento.src = ARREGLO_DE_IMAGENES[posicionActual];
}

function irAtras() {
  
    if (posicionActual === 0) {
        posicionActual = ARREGLO_DE_IMAGENES.length - 1; 
    } else {
       
        posicionActual--;
    }
    actualizarImagen();
}

function irSiguiente() {
    
    if (posicionActual === ARREGLO_DE_IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
       
        posicionActual++;
    }
    actualizarImagen();
}
actualizarImagen();

