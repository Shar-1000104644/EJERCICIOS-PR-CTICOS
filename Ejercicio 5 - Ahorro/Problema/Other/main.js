//Escribe aquí tú código
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var ahorros = [];

$(document).ready(initApp);

function initApp()
{
	updateSelectMeses();
	updateReport();

	$('#form_ahorro').submit(submitFormAhorro);
}
function registrarPerdida()
{
	var monto = $('#monto').val();
	var mes = $('#meses').val();

	console.log(parseFloat(monto));
	console.log(mes);

	if(ahorros[parseInt(mes)] != undefined)
		ahorros[parseInt(mes)] -= parseFloat(monto);
	else
		ahorros[parseInt(mes)] = 0 - parseFloat(monto);

	updateReport();
}

function submitFormAhorro(event)
{
	var monto = $('#monto').val();
	var mes = $('#meses').val();

	if(ahorros[parseInt(mes)] != undefined)
		ahorros[parseInt(mes)] += parseFloat(monto);
	else
		ahorros[parseInt(mes)] = parseFloat(monto);

	updateReport();

	event.preventDefault();
	return;
}

function updateSelectMeses()
{
	var select = document.getElementById('meses');

	for (var i = 0; i < meses.length; i++) {
		select.innerHTML += '<option value="' + i + '">' + meses[i] + '</option>';
	}
}

function updateReport()
{
	var listReport = document.getElementById('reporte_meses');
	var montoAnual = document.getElementById('monto_anual');
	var suma = 0;

	if(ahorros.length > 0)
		listReport.innerHTML = '';

	for (var i = 0; i < ahorros.length; i++) {
		if(ahorros[i] != undefined)
		{
			suma += ahorros[i];
			if(ahorros[i] > 0)
				listReport.innerHTML += '<li class="list-group-item"><button class="btn btn-sm btn-success" onclick="limpiarMes(' + i + ')">Borrar</button> ' + meses[i] + ' : S/ ' + ahorros[i] + '</li>';
			else
				listReport.innerHTML += '<li class="list-group-item"><button class="btn btn-sm btn-success" onclick="limpiarMes(' + i + ')">Borrar</button>En ' + meses[i] + ' estás en banca rota, debes S/ ' + Math.abs(ahorros[i]) + '</li>';
		}
	}

	montoAnual.innerHTML = suma;
}

function limpiarMes(_posicion)
{
	ahorros[_posicion] = 0;
	updateReport();
}
