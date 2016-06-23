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

function promediar(){
  var suma=0;
  var promedio=0;
  for(var i=0; i<estatura.length ;i++){
    suma+=parseFloat(estatura[i]);
  }
  promedio=suma/estatura.length;
  var promedioFinal=document.getElementById('resultado');
  promedioFinal.innerHTML="Promedio" + promedio.toFixed(2);  
}
