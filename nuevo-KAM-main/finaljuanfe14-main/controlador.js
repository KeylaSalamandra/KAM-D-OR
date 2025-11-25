let boton=document.getElementById("boton")
boton.addEventListener("click", function(evento){
    evento.preventDefault()
    
    let cajausuario=document.getElementById("cajausuario")
    let cajacorreo=document.getElementById("cajacorreo")
    let cajaciudad=document.getElementById("cajaciudad")
    let cajtelefono=document.getElementById("cajatelefono")
    let cajacontraseña=document.getElementById("cajacontraseña")

    let datosDelFormulario={
        usuario:cajausuario.Value,
        correo:cajacorreo.Value,
        ciudad:cajaciudad.Value,
        telefono:cajaTelefono.Value,
        contraseña:cajacontraseña.Value,
    }
    Swal.fire({
  title: "Bienvenido!",
  text: "Haz sido registrado!",
  icon: ""
});

})