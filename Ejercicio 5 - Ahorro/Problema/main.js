//Escribe aquí tú código

var meses =['enero','febrero', 'marzo','abril','mayo','junio','julio','agosto','setiembre','octubre','noviembre','diciembre'];
var ahorros=[23,32,23];


$(document).ready(initApp);

function initApp(){
	updateSelectMeses();
}


function updateSelectMeses(){
	var select= document.getElementById('meses');
	for(var i=0; i<meses.length; i++){
		select.innerHTML += '<opcion value="" ' + i + ' ">" ' + meses[i] + '</option>'
	}
}


function updateReport(){ 
	var listaReport = document.getElementById('reporte_meses');
	var montoAnual = document.getElementById('monto_anual');

	for (var i =0,  i<ahorros.length; i++) {
		listaReport.innerHTML+='<li>' + ahorros[i] + '</li>'
	}
}

// 	meses['enero']=0;
// 	meses['febrero']=0;
// 	meses['marzo']=0;
// 	meses['abril']=0;
// 	meses['mayo']=0;
// 	meses['junio']=0;
// 	meses['julio']=0;
// 	meses['agosto']=0;
// 	meses['setiembre']=0;
// 	meses['octubre']=0;
// 	meses['noviembre']=0;
// 	meses['diciembre']=0;

// 	for(var i=0; i<m.length; i++)
// 	{
// 		if(){

// 		}
// 	}
//  }











// // Declarar
//     Rectangulo[] rectangulos;
// // Crear el array
// 	rectangulos=new Rectangulo[3];
// // Inicializar los elementos del array
// 	rectangulos[0]=new Rectangulo(10, 20, 30, 40);
// 	rectangulos[1]=new Rectangulo(30, 40);
// 	rectangulos[2]=new Rectangulo(50, 80);
// // O bien, en una sola línea

// 	Rectangulo[] rectangulos={new Rectangulo(10, 20, 30, 40), 
// 		new Rectangulo(30, 40), new Rectangulo(50, 80)};
// // Usar el array
// // Para calcular y mostrar el área de los rectángulos escribimos

// 	for(int i=0; i<rectangulos.length; i++){
// 		System.out.println(rectangulos[i].calcularArea());
// 	}