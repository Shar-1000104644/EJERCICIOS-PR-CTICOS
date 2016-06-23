//Escribe aquí tú código

var posicionA=parseInt(document.getElementById('a').value);
var posicionB=parseInt(document.getElementById('b').value);
var distancia;
var puntoMedio;
var puntoEncuentro;

function calcular(){
	distancia=posicionB-posicionA;
	puntoMedio=distancia/2;
	puntoEncuentro=posicionA+puntoMedio;
	alert(puntoEncuentro);
}

// function mostrar(){
// 	var letra = document.getElementById('mostrar');
// 	letra.innerHTML='';
// }