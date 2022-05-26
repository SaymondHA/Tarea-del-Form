var input_form = document.getElementById("myForm");



var informacion={
    "Nombre":"", 
    "Email":"", 
}

input_form.addEventListener("submit", function(event) {

event.preventDefault();
    var Nombre = document.getElementById("id_Nombre").value;
    var Email = document.getElementById("id_Email").value;

    informacion.Nombre=Nombre; 
    informacion.Email=Email;
   
    console.log(informacion);
    alert (Nombre+Email);
})