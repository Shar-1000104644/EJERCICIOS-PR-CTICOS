//Escribe aquí tú código

// Un empleado de la tienda “Tiki Taka” realiza N ventas durante el día;se requiere saber cuántas
//  de ellas: • Fueron mayores a $1000, • Cuántas fueron mayores a $500 pero menores o iguales a $1000
//   • Cuántas fueron menores o iguales a $500. • Además, se requiere saber el monto de lo vendido en 
//   cada categoría y de forma global.


var ventasLista=[];

function calcular(){
	var categoriaA=0;
	var categoriaB=0;
	var categoriaC=0;
	var ventaTotal;
	var venta=document.getElementById('venta').value;
	venta=parseInt(venta);
	ventasLista.push(venta);
	document.getElementById('venta').value='';
	for(var i=0; i<ventasLista.length; i++){
		if(ventasLista[i]>1000){
			categoriaA+=ventasLista[i];
			var letra=document.getElementById('a');
			letra.innerHTML=categoriaA;
		}if(ventasLista[i]>500 && ventasLista[i]<=1000){
			categoriaB+=ventasLista[i];
			var letra=document.getElementById('b');
			letra.innerHTML=categoriaB;
		}if(ventasLista[i]<=500){
			categoriaC+=ventasLista[i];
			var letra=document.getElementById('c');
			letra.innerHTML=categoriaC;
		}
	}
	ventaTotal=categoriaA+categoriaB+categoriaC;
}