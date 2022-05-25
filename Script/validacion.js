        (function(){  // Función anónima

            var formulario = document.getElementsByName('formulario')[0],   //[0] Primer elemento, el formulario en si mismo.
                elementos = formulario.elements,                            // Elementos del form, no lo usamos en este script.
                boton = document.getElementById('btn');                     // Elemento id="boton"


            // --------------------------------------------------------
            // Validamos Nombre ----- OK
            // --------------------------------------------------------            
            var validarNombre = function(e){
                if (formulario.Nombre.value == 0){      // Si el campo id="nombre" del form está vacio...
                    alert("Completa el campo nombre");
                    e.preventDefault();                 // Evita elcomportamiento por defecto
                    
                }
            };
            
            // --------------------------------------------------------
            // Validamos Apellido ----- OK
            // --------------------------------------------------------            
            var validaApellido = function(e){
                if (formulario.Apellido.value == 0){      // Si el campo id="apellido" del form está vacio...
                    alert("Completa el campo apellido");
                    e.preventDefault();                 // Evita elcomportamiento por defecto
                    
                }
            };

            // --------------------------------------------------------
            // Validamos Email ----- OK
            // --------------------------------------------------------            
            var validaEmail = function(e){
                if (formulario.Email.value == 0){      // Si el campo id="Email" del form está vacio...
                    alert("Por favor ingrese un email de contacto");
                    e.preventDefault();                 // Evita elcomportamiento por defecto
                    
                }
            };

            // --------------------------------------------------------   
            // Validamos Interes ----- OK   
            // --------------------------------------------------------                  
            var validarRadio = function(e){
                if (formulario.Interes[0].checked == true || 
                    formulario.Interes[1].checked == true ||  
                    formulario.Interes[2].checked == true || 
                    formulario.Interes[3].checked == true){
                } else{  //Si al menos uno de los Radio no está marcado....
                    alert("Completa el campo Intereses");
                    e.preventDefault();
                }
            };
            
            // --------------------------------------------------------   
            // Validamos Terminos y Condiciones ------ OK
            // --------------------------------------------------------              
            var validarCheckbox = function(e){
                if (formulario.terminos.checked == false){
                    alert("Acepta los términos y condiciones");
                    e.preventDefault();
                }
            };

            // --------------------------------------------------------   
            // Se ejecuta al presionar submit e invoca a las validaciones   
            // --------------------------------------------------------                  
            var validar = function(e){  // "e" es el evento recibido del form
                validarNombre(e);
                validaApellido(e)
                validaEmail(e)
                validarRadio(e);
                validarCheckbox(e);
            };
            
            // --------------------------------------------------------
            // Espera que se presione "enviar" y llama a "validar"
            // submit es un evento DEL FORM, no del botón!
            formulario.addEventListener("submit", validar);
        }())

    