function validar() {
    
    let nombre = document.forms["form"]["nombre"];
    let telefono = document.forms["form"]["telefono"];
    let mail = document.forms["form"]["mail"];
    let consulta = document.forms["form"]["consulta"];
   // let novalidado = true;
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
   if(regexNombre.test(nombre.value)&&regexTel.test(telefono.value)&&regexMail.test(mail.value) &&regexConsulta.test(consulta.value)){
   imprimir();
   }
    
    return false;

   
}
 function imprimir(){
    const formularioActual= document.getElementById('form');
    const form= document.createElement('div');
    form.className="contacto-container";
    const label1= document.createElement('h3');
   const label2= document.createElement('h3');
     const label3= document.createElement('h3');
       const label4= document.createElement('h3');
       const titulo = document.createElement('h2');
    titulo.textContent='FORMULARIO ENVIADO';
       label1.textContent="Nombre : "+formularioActual.elements['nombre'].value;
        label2.textContent="Telefono : "+formularioActual.elements['telefono'].value;
         label3.textContent="EMAIL : "+formularioActual.elements['mail'].value;
          label4.textContent="Consulta : "+formularioActual.elements['consulta'].value;
       form.appendChild(titulo);   
       form.appendChild(label1);
       form.appendChild(label2);
       form.appendChild(label3);
       form.appendChild(label4);
     formularioActual.insertAdjacentElement('afterend', form);
    
   
    }