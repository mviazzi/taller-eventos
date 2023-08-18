//const divi = document.querySelector('div');

function mensaje() {
    alert ("Hola! Soy el div");
};


document.addEventListener('DOMContentLoaded', function() {
    const divi = document.getElementById('divi');
    divi.addEventListener('click', mensaje);
})

//divi.addEventListener ("click", alert ("Hola! Soy el div"));
