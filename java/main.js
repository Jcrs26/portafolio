let Nombre = document.getElementById("Nombre");
let Correo = document.getElementById("Correo");
let Numero = document.getElementById("Numero");
let msg = document.getElementById("msgArea");
let btnEnviar = document.getElementById("btnEnviar");
let alertSend = document.getElementById("alertSend");

let flagArroba = false;
let flagPunto = false;
let flagChar = false;

Nombre.addEventListener("blur", function (e) {
    e.preventDefault();
    //solo letras, incluyendo espacios y acentos. 
    if (
        (Nombre.value.length >= 3) && (Nombre.value.length <= 20)
    ) { //validacion nombre
        Nombre.classList.remove("is-invalid");
        Nombre.classList.add("is-valid");
    } else {
        Nombre.classList.remove("is-valid");
        Nombre.classList.add("is-invalid");
    }

    for (let i = 0; i < Nombre.value.length; i++) {
        if (

            ((Nombre.value.toUpperCase().charCodeAt(i) < 65)
                ||
                (Nombre.value.toUpperCase().charCodeAt(i) > 90))

            && ((Nombre.value.toUpperCase().charCodeAt(i) != 32))
            && ((Nombre.value.toUpperCase().charCodeAt(i) != 193))
            && ((Nombre.value.toUpperCase().charCodeAt(i) != 201))
            && ((Nombre.value.toUpperCase().charCodeAt(i) != 205))
            && ((Nombre.value.toUpperCase().charCodeAt(i) != 211))
            && ((Nombre.value.toUpperCase().charCodeAt(i) != 209))) {

            Nombre.classList.remove("is-valid");
            Nombre.classList.add("is-invalid");
            break;

        } else {

            console.log(Nombre.value.charAt(i));
        }
    }
});

Correo.addEventListener("blur", function (e) {
    e.preventDefault()
    flagArroba = false;
    flagChar = false;
    flagPunto = false;

    Correo.classList.remove("is-invalid");
    Correo.classList.add("is-valid");

    if ((Correo.value.length < 3) || (Correo.value.length > 70)) {
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
    }//if

    for (let i = 0; i < Correo.value.length; i++) {

        if (Correo.value.charCodeAt(i) == 64 && flagArroba == false) {
            flagArroba = true;
        } if (Correo.value.charCodeAt(i) == 46 && flagPunto == false) {
            flagPunto = true;
        }

        if ((
            (Correo.value.toLowerCase().charCodeAt(i) < 97)
            ||
            (Correo.value.toLowerCase().charCodeAt(i) > 122)
        )
            && ((Correo.value.toLowerCase().charCodeAt(i) != 32)) // espacio
            && ((Correo.value.toLowerCase().charCodeAt(i) != 193)) // Á
            && ((Correo.value.toLowerCase().charCodeAt(i) != 201)) // É
            && ((Correo.value.toLowerCase().charCodeAt(i) != 205)) // Í
            && ((Correo.value.toLowerCase().charCodeAt(i) != 211)) // Ó
            && ((Correo.value.toLowerCase().charCodeAt(i) != 218)) // Ú
            && ((Correo.value.toLowerCase().charCodeAt(i) != 209)) // Ñ
            && ((Correo.value.toLowerCase().charCodeAt(i) != 64))//@
            && ((Correo.value.toLowerCase().charCodeAt(i) != 46))// .
        ) {
            flagChar = true;
            break;
        }//if 
    };

    if (flagArroba == false || flagPunto == false || flagChar == true) {
        Correo.classList.remove("is-valid");
        Correo.classList.add("is-invalid");
    }

});

Numero.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let NumeroValor = Numero.value;

    //validando campo usuario
    if(NumeroValor.length==10 && !isNaN(NumeroValor)){
        Numero.classList.remove("is-invalid")
        Numero.classList.add("is-valid")

    }else{
        Numero.classList.remove("is-valid")
        Numero.classList.add("is-invalid")
    }

});
msg.addEventListener("blur", function (e) {
    e.preventDefault()
    
    let msgValor = msg.value;  

    if(msgValor.length> 0 && msgValor.length<=280){
        msg.classList.remove("is-invalid")
        msg.classList.add("is-valid")

    }else{
        msg.classList.remove("is-valid")
        msg.classList.add("is-invalid")
    }

})

btnEnviar.addEventListener("click", function (e){
    e.preventDefault();

    let sendNombre = Nombre.value;
    let sendCorreo = Correo.value;
    let sendAsunto = "Pregunta-Contacto ";
    let sendCuerpo = "-El correo del usuario es: " + sendCorreo;
    
    sendCuerpo += " -El nombre del usuario es:  " +sendNombre+" -Y su mensaje es: " + msg.value;
   
     if(Nombre.value!="" && Correo.value != "" && msg.value != ""){ 
        Email.send({
            Host : "",
            Username : "",
            Password : "",
            To : "",
            From : "",
            Subject : sendAsunto,
            Body : sendCuerpo
        }).then(
          message => alert("Correo enviado con éxito")
        )
    }else{
        alertSend.style.display = "block";
        setTimeout( ()=>{alertSend.style.display = "none"}, 5000);
  }    
 
})
