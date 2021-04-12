window.addEventListener('load', function(){

    
    var boton_ingresar = document.getElementById("ingresar");

    // VALIDAR DATOS INGRESADOS POR EL USUARIO
    boton_ingresar.addEventListener('click', function(){

        //VALIDAR ADMINISTRADOR
        var email = document.getElementById("correo").value;
        var password = document.getElementById("pass").value;

        console.log(email);
        //console.log(password);
        console.log(password)
        var mensaje = document.querySelector("#mensaje");

        if(email == 'admin@gmail.com' && password == '12345' ){
            window.location.href="administrador/administrador_solicitudes.html";
        }
        else if(email == 'repor@gmail.com' && password == '12345'){
            window.location.href="reporteros/reportero_nuevo.html";
        }
        else {
            mensaje.style.display = "block";
        }
    });

});