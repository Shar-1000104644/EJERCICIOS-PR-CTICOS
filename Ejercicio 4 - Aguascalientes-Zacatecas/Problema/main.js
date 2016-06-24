//Escribe aquí tú código
function calcular(){

	var posicionA=document.getElementById('a').value;
	posicionA=parseInt(posicionA);

	var posicionB=document.getElementById('b').value;
	posicionB=parseInt(posicionB);

	var distancia,puntoMedio,puntoEncuentro;

	distancia=posicionB-posicionA;

	puntoMedio=distancia/2;

	puntoEncuentro=posicionA+puntoMedio;

	escribir(puntoEncuentro);

}

function escribir(_texto){
	var letra = document.getElementById('mostrar');
	letra.innerHTML='Se encontraran en el kilometro' + ' ' +_texto;
}