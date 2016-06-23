var estatura=[];

function registrarEstatura(){
	var valor=document.getElementById('dato').value;
	if(!isNaN(valor)){
		if(valor>0 && valor<3){
			document.getElementById('dato').value=' ';
			// valors[]=valor;
			estatura.push(valor); 
			updateList();
		}else{
			alert('Ingrese un número de 0 a 3');
		}
	}else{
		alert('Ingrese un número');
	}
}

function updateList(){
	var lista=document.getElementById('mostrarDatos');
	lista.innerHTML=' ';
	for(var i=0; i<estatura.length; i++){
		lista.innerHTML+='<li>' + estatura[i] + '</li>';
	}
} 

var suma = 0;

function promediar(){
	suma= suma+estatura[i];
	var promedio = suma/i;
	var letra=document.createElement('h1');
	var l=document.createTextNode('El promedio de las ' + i + 'ingresadas es: ' + promedio);
	letra.appendChild(l);
	document.body.appendChild(letra);

}


// var edad=[],suma=0,promedio;
// var num=parseInt(prompt("¿Cuántos alumnos se registrarán?"));
// for (var i = 1; i <= num; i++) {
// 	edad[i]=parseInt(prompt("¿Cuál es la edad del alumno nro "+i+"?"));
// 	suma=suma+edad[i];
// }
// promedio=suma/num;
// alert("El promedio de las "+num+" edades ingresadas es "+promedio);