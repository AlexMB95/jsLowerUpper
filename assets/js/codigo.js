/*Declaración de variables*/
var forma;
var frase = prompt("Ingrese una palabra o frase");

function composicion(frase){
	if (frase == frase.toLowerCase()) {
		forma = alert("Todas las letras de la frase son minúsculas");
	}else{
		if (frase == frase.toUpperCase()) {
			forma = alert("Todas las letras de la frase son mayúsculas");
		}else{
			forma = alert("Todas las letras de la frase son mixtas(mayúsculas y minúsculas)");
		}
	}
}
composicion(frase);