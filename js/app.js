window.addEventListener("load", function() {
	var boton = document.getElementById("resultado");
	boton.addEventListener("click", function() {
		var palabra = document.getElementById("palabra").value;
		var letra = document.getElementById("letra").value;
		var mostrar = document.getElementById("mostrar");
		mostrar.innerHTML = "<p>La letra "+ letra + " muestra " + contadorLetras(palabra,letra) +" veces en " + palabra+ "</p>";
	});
	function contadorLetras(palabra,letra) {
		var longitud = palabra.length;
		var contador=0;
		for(i=0; i<longitud;i++) {
			var letrita =palabra.charAt(i);
			if(letra==letrita){
			contador++;
			}

		}
return contador;
	}
});

function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial){
        return false;
    }
}