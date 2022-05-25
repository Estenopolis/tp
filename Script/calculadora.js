var df;
var diametro; 
confirm("¿Queres calcular el diámetro del estenopo?");
df = prompt("¿Cual es la distancia Focal en mm?");
df = parseInt(df);
            
if (df>=100) {
alert("Esto va a estar interesante...");
} else{
    alert("Te vas a sorprender");
    };
            
diametro = Math.sqrt(0.0016*df);

document.write ("El diámetro del estenopo es igual a " + diametro + "mm");