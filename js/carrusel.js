
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

