var tienda = {
	nombre:"AQP",
	empleados:[],
	ciudad:"Arequipa",
	ventas:0,
	sumarVentas:function(){
		for(var i=0; i<this.empleados.length;i++)
		{
			this.ventas += this.empleados[i].ventas;
		}
		return this.ventas;
	}
};

tienda.empleados.push({nombre:"Sarito", ventas:250});
tienda.empleados.push({nombre:"Astrod", ventas:230});
tienda.empleados.push({nombre:"Sarito", ventas:250});
tienda.empleados.push({nombre:"Sarito", ventas:250});
