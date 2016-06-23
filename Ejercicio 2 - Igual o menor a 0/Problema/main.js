//Escribe aquí tú código

// Se requiere un algoritmo para determinar, de N cantidades, 
// cuántas son menores o iguales a cero y cuántas mayores a cero.
//  Realice el diagrama de flujo y el pseudocódigo para representarlo, 
//  utilizando el ciclo apropiado.

var listaMenor = [];
var listaMayor = [];

function registrarNumeros(){
var numero = document.getElementById('dato').value;
	if(!isNaN(numero)){
		if(numero<0){
			listaMenor.push(numero);
			document.getElementById('dato').value =' ';
			mostrarNumerosMenor();
		}else if(numero==0){
			document.getElementById('dato').value =' ';
			var cero =document.createElement('h4');
			var c=document.createTextNode('Este número es cero');
			cero.appendChild(c);
			document.body.appendChild(cero);
			
		}
		else{
			listaMayor.push(numero);
			document.getElementById('dato').value =' ';
			mostrarNumerosMayor();
		}
	}else{
		alert('Solo debes ingresar números');
	}
}

function mostrarNumerosMenor(){
	var escribirLista=document.getElementById('resultadoMenor');
	escribirLista.innerHTML=' ';
	for(var i=0; i<listaMenor.length; i++){
		escribirLista.innerHTML+='<p>' + 'Este número es menor que cero: ' +  listaMenor[i] + '</p>';
	}
}

function mostrarNumerosMayor(){
	var escribirLista=document.getElementById('resultadoMayor');
	escribirLista.innerHTML=' ';
	for(var i=0; i<listaMayor.length; i++){
		escribirLista.innerHTML+='<p>' + 'Este número es mayor que cero: ' +  listaMayor[i] + '</p>';
	}
}
