function mensajeDiv() {
    alert ("Hola! Soy el div");
};

function mensajeBtn (event) {
    alert('Hola!');
    event.stopPropagation();
}

document.addEventListener ('DOMContentLoaded', () => {
    const boton = document.querySelector('button');
    
    boton.addEventListener('click', mensajeBtn);
});

document.addEventListener ('DOMContentLoaded', () => { 
    const divi = document.querySelector('div');
    divi.addEventListener('click', mensajeDiv);
});


//divi.addEventListener ("click", alert ("Hola! Soy el div"));

/*document.addEventListener('DOMContentLoaded', ()=> {
   const botonn = document.getElementsByTagName('button');
   for (let i=0; i<botonn.length; i++) {
    botonn[i].addEventListener('click', alert('Hola!')); 
   }
});*/