//Escribe aquí tú código
var empleado={
	nombre:'Gabriel',
	ventas:0
};

var tienda = {
	nombre: 'AQP1',
	empleados: [],
	cuidad: 'Arequipa',
	ventas: 0,
	sumarVentas:function(){
		this.ventas=0;
		for( var i = 0; i<this.empleados.length; i++){
			this.ventas+=this.empleados[i].ventas;
		}
		return this.ventas;
	}
};

tienda.empleados.push({nombre:'Emir', ventas:100});
tienda.empleados.push({nombre:'Ale', ventas:200});
tienda.empleados.push({nombre:'Brenda', ventas:300});
tienda.empleados.push({nombre:'Daniel', ventas:400});