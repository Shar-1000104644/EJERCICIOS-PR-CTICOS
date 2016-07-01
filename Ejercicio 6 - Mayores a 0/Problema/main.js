//Escribe aquí tú código

// Se requiere un algoritmo para determinar, de N cantidades, 
// cuántas son menores o iguales a cero y cuántas mayores a cero.

var numerosMayores=[];
var numerosMenores=[];

function identificar(){
var numero=document.getElementById('numero').value;
	if(!isNaN(numero)){	
			var grande=document.getElementById('grande');
			grande.innerHTML=numero;	

		if(numero==0){
			escribir('Este número es CERO','a');

			// var cero= document.getElementById('cero');
			// cero.innerHTML= 'Este número es CERO.';
			document.getElementById('numero').value=' ';
		}
		else if(numero>0){
			numerosMayores.push(numero);
			document.getElementById('numero').value=' ';
			// var menor=document.getElementById('menor');
			// menor.innerHTML='El número ' + numero + ' es MAYOR que cero.'
			escribir('El número ' + numero +' es mayor que cero.','b');

		}
		else{
			numerosMenores.push(numero);
			document.getElementById('numero').value=' ';
			// var mayor=document.getElementById('mayor');
			// mayor.innerHTML='El número ' + numero + ' es MENOR que cero.'
			escribir('El número '+ numero +' es menor que cero.','c');			
		}
	}
	else{	
		var texto=document.createElement('h4');
		var t=document.createTextNode('Ingresa solo números');
		texto.appendChild(t);
		document.body.appendChild(texto);
	}
}

function escribir(_mensaje,_id){
	var pe=document.createElement('h3');
	pe.innerHTML=_mensaje;
	var bloque=document.getElementById(_id);
	bloque.appendChild(pe);
}
