//Escribe aquí tú código

// Una empresa tiene el registro de las horas que trabaja diariamente 
// un empleado durante la semana (seis días) y requiere determinar el 
// total de éstas, así como el sueldo que recibirá por las horas 
// trabajadas.

// var dias = [[1,2,3], [4,5,6]];
// alert(dias[0][2]);

$(document).ready(initApp);

function initApp(){
	completarSemana();
}

var dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

function selecionDia(){
	var diasSemana = document.getElementById('semana');
	for(var i=0; i<dias.length; i++){
		diasSemana.innerHTML+= '<option value="' + i + ' ">' + dias[i] + '</option>';
	}
}

function calcularHora(){
	var horaInicio=document.getElementById('inicio').value;
	horaInicio=parseInt(horaInicio);
	var horaSalida=document.getElementById('final').value;
	horaSalida=parseInt(horaSalida);
	var mañana=$('#a option:selected').text();
	var tarde=$('#b option:selected').text();

	if(mañana==='AM' && tarde==='AM'){
		var horaDiferencia=horaSalida-horaInicio;
		mensaje('msmUno', horaDiferencia);
		// alert(horaDiferencia);
		
	}if(mañana==='PM' && tarde==='PM'){
		var horaDiferencia=horaSalida-horaInicio;
		mensaje('msmUno', horaDiferencia);

		// alert(horaDiferencia);
	}if(mañana==='AM' && tarde==='PM'){
		var horaDiferencia=(12+horaSalida)-horaInicio;
		mensaje('msmUno', horaDiferencia);

		// alert(horaDiferencia);
	}if(mañana==='PM' && tarde==='AM'){
		var horaDiferencia=(12+horaSalida)-horaInicio;
		mensaje('msmUno', horaDiferencia);

		// alert(horaDiferencia);
	}	
	document.getElementById('inicio').value='';
	document.getElementById('final').value='';
}

function mensaje(_id, _hora){
	var msm_uno = document.getElementById(_id);
	msm_uno.innerHTML='Hoy trabajaste ' + _hora + ' horas';
}

function mostrarDias() {
	var day = document.getElementById('dia');
	for (var i=0; i<dias.lengt; i++){
		day.innerHTML=dias[i];
	}
}

// function calcular{
// var sueldo = document.getElementById('sueldo').value;
// dias.push(sueldo);
// }
// var dias = new Array();
// dias['lunes']= 1,2,3;
// dias['martes']= 4,5,6;
// dias['miercoles']= 7,8;
// dias['jueves']= 9;



