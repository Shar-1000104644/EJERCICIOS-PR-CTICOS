//Escribe aquí tú código

// Se requiere un algoritmo para determinar, de N cantidades, 
// cuántas son menores o iguales a cero y cuántas mayores a cero.
//  Realice el diagrama de flujo y el pseudocódigo para representarlo, 
//  utilizando el ciclo apropiado.

var numerosLista=[];

function ingresarNumero(){
	var numeroIngresado=document.getElementById('numero').value;
	if(!isNaN(numeroIngresado)){
			document.getElementById('numero').value=' ';
			numerosLista.push(numeroIngresado);
			var letra=document.createElement('p');
	}else{
		document.write('Escribe un número')
	}

}