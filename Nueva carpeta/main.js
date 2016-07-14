//Escribe aquí tú código
var tiendas = [
	[
		{
			name: 'Centro histórico',
			empleados: [ { name: 'Juano', ventas: 0 }, { name: 'Viviano', ventas: 0 } ]
		},
		// {
		// 	name: 'Arequipa 2',
		// 	empleados: [ { name: 'Juano', ventas: 0 }, { name: 'Sheylo', ventas: 0 } ]
		// }
	],
	// [
	// 	{
	// 		name: 'Lima 1',
	// 		empleados: [ { name: 'Kupito', ventas: 0 }, { name: 'Katherino', ventas: 0 } ]
	// 	},
	// 	{
	// 		name: 'Lima 2',
	// 		empleados: [ { name: 'Roso', ventas: 0 }, { name: 'Merlo', ventas: 0 } ]
	// 	}
	// ],
	// [
	// 	{
	// 		name: 'Cuzco 1',
	// 		empleados: [ { name: 'Kupito', ventas: 0 }, { name: 'Katherino', ventas: 0 } ]
	// 	},
	// 	{
	// 		name: 'Cuzo 21231232',
	// 		empleados: [ { name: 'Roso', ventas: 0 }, { name: 'Merlo', ventas: 0 } ]
	// 	}
	// ]
];
var ciudades = ['Arequipa', 'Lima'];
var ventaTotal = 0;

$(document).ready(initApp);

function initApp() {
	updateCiudades();
	updateSales();
	$('#ciudades').on('click', '.btn-add', addVenta);
}

function updateSales() {
	var htmlCity = $('#ciudades');
	htmlCity.html('');
	ventaTotal = 0;
	for (var i = 0; i < ciudades.length; i++) {
		htmlCity.append('<h4>Ciudad ' + ciudades[i] + '</h4><ul class="list-group" id="c_'+i+'"></ul><hr>');
		if(tiendas[i])
			listStores(i, tiendas[i]);
		else
			$('#c_' + i).html('<div class="alert alert-info">No hay tiendas en esta ciudad</div>');
	}

	$('#venta_anual').html(ventaTotal.toFixed(2));
}

function listStores(_ciudad, _stores)
{
	var lista = $('#c_' + _ciudad);
	lista.html('');
	var ventaTienda = 0;
	for (var i = 0; i < _stores.length; i++) {
		ventaTienda = getVentasTienda(_stores[i].empleados);
		ventaTotal += ventaTienda;
		lista.append('<li class="list-group-item active"><span class="badge">S/ ' + ventaTienda + '</span>Tienda ' + tiendas[_ciudad][i].name + '</li>');
		for (var j = 0; j < _stores[i].empleados.length; j++) {
			lista.append('<li class="list-group-item"><span class="badge">S/ ' + _stores[i].empleados[j].ventas + '</span>' + _stores[i].empleados[j].name + '<div></div></li>');
		}
		lista.append('<li class="list-group-item list-group-item-warning">Agregar venta: <input class="nombre" type="text" placeholder="Empleado"> <input class="monto" type="text" placeholder="Monto"> <button data-ciudad="'+_ciudad+'" data-tienda="'+i+'" class="btn-add btn btn-xs btn-primary">Agregar</button></li>');
	}
}

function addVenta()
{
	var tienda = $(this).attr('data-tienda');
	var ciudad = $(this).attr('data-ciudad');
	var nombre = $(this).parent().find('.nombre').val();
	var monto = $(this).parent().find('.monto').val();

	console.log(tienda + ' : ' + ciudad + ' :: ' + nombre + ' > ' + monto);
	console.log(tiendas[ciudad][tienda]);
	var encontrado = false;
	for (var i = 0; i < tiendas[ciudad][tienda].empleados.length; i++) {
		console.log('Comparando con: ' + tiendas[ciudad][tienda].empleados[i].name);
		if(tiendas[ciudad][tienda].empleados[i].name == nombre)
		{
			tiendas[ciudad][tienda].empleados[i].ventas += parseFloat(monto);
			encontrado = true;
		}
	}
	if(!encontrado)
		tiendas[ciudad][tienda].empleados.push({ name: nombre, ventas: parseFloat(monto) });
	updateSales();
}

function getVentasTienda(_empleados)
{
	var res = 0;
	for (var i = 0; i < _empleados.length; i++) {
		res += _empleados[i].ventas;
	}

	return res;
}

function agregarTienda()
{
	var tienda = $('#nombre_tienda').val();
	var ciudad = $('#select_ciudad').val();

	console.log(parseInt(ciudad));
	if(!tiendas[parseInt(ciudad)]){
		tiendas[parseInt(ciudad)] = [];
	}
		tiendas[parseInt(ciudad)].push({name:tienda, empleados:[]});
	updateSales();
}


function agregarCiudad()
{
	var ciudad = $('#nombre_ciudad').val();

	console.log(parseInt(ciudad));
	ciudades.push(ciudad);
	updateCiudades();
	updateSales();
}

function updateCiudades()
{
	var select = $('#select_ciudad');
	select.html('');
	for (var i = 0; i < ciudades.length; i++) {
		select.append('<option value="'+i+'">'+ciudades[i]+'</option>');
	}
}
