function validar() {
    const errNombre= document.getElementById("errNombre");
    const errTel= document.getElementById("errTel");
    const errMail= document.getElementById("errMail");
    const errConsulta= document.getElementById('errConsulta');
    let nombre = document.forms["form"]["nombre"];
    let telefono = document.forms["form"]["telefono"];
    let mail = document.forms["form"]["mail"];
    let consulta = document.forms["form"]["consulta"];
    let validado = true;
    const regexNombre= /^[A-Za-z\s]+$/
    const regexTel=/^\+?[0-9]{7,20}$/
    const regexMail= /^\w+@\w+\.com(\.ar)?$/
    const regexConsulta= /^[\s\S]{10,150}$/
    if (!regexNombre.test(nombre.value)|| nombre.value.length>50) {
         
        errNombre.style.color='red';
        errNombre.textContent='Nombre invalido';
        validado =false;
    }else{
        
        nombre.style.backgroundColor=' ';
        errNombre.textContent=' ';
    }

    if (!regexTel.test(telefono.value)) {
        
        errTel.style.color='red';
        errTel.textContent='Numero de telefono invalido'
        validado=false;
       
    }else{
        errTel.textContent=' ';
        telefono.style.backgroundColor=' ';
    }

    if (!regexMail.test(mail.value)) {
        errMail.style.color='red';
       errMail.textContent='Email Invalido';
       validado=false;
        
    }else{
        
         errMail.textContent=' ';
    }

    if (!regexConsulta.test(consulta.value)) {
      errConsulta.style.color='red';  
      errConsulta.textContent='Envie una Consulta';
      validado=false;
    }else{
        errConsulta.textContent=' ';
    }
   if(validado){
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