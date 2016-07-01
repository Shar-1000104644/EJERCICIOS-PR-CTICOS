var a_nombre=[];
var a_ciudad=[];
var a_tienda=[];
var a_monto_emp=[];

// arrays para rellenar
var a_ciudad_select=["Paleta","Galleta"];
var a_tienda_select=["Choco","Mandiles","Glace"];
// $(document).ready(initApp());

$(document).ready(initApp);

function initApp(){
	var seleccion= document.getElementById("tienda");
  var seleccion2= document.getElementById("ganancia_tienda");
  seleccion.innerHTML="";
  seleccion2.innerHTML="";
	for (var i=0; i<a_tienda_select.length ;i++) {
		seleccion.innerHTML+='<option value="'+i+'">'+a_tienda_select[i]+'</option>';
    seleccion2.innerHTML+='<option value="'+i+'">'+a_tienda_select[i]+'</option>';
	}
  
  var selecciontienda=document.getElementById("ciudad");
  var selecciontienda2=document.getElementById("ganancia_ciudad");
  selecciontienda.innerHTML="";
  selecciontienda2.innerHTML="";
	for (var i=0; i<a_ciudad_select.length ;i++) {
		selecciontienda.innerHTML+='<option value="'+i+'">'+a_ciudad_select[i]+'</option>';
    selecciontienda2.innerHTML+='<option value="'+i+'">'+a_ciudad_select[i]+'</option>';
	}
}


function empleado(){
  this.nombre="";
  this.ciudad="";
  this.tienda="";
  this.monto=0;
}
function registrarVenta(){
  var nombre_empleado = new empleado();
  nombre_empleado.nombre= $('#empleado').val();
  nombre_empleado.ciudad= $("#ciudad option:selected").text();
  nombre_empleado.tienda=$("#tienda option:selected").text();
  nombre_empleado.monto= $('#venta_diaria').val();
  
  a_nombre.push(nombre_empleado.nombre);
  a_ciudad.push(nombre_empleado.ciudad);
  a_tienda.push(nombre_empleado.tienda);
  a_monto_emp.push(nombre_empleado.monto);
 
  console.log(nombre_empleado.nombre+nombre_empleado.ciudad+nombre_empleado.tienda+nombre_empleado.monto);
}
function ganancias(){
  gananciaCadena();
  gananciaTienda();
  gananciaCiudad();
}
function gananciaCadena(){
 var sumatotal=0;
  for(var i=0; i<a_monto_emp.length;i++){
    var dato_temp=parseFloat(a_monto_emp[i]);
    sumatotal=sumatotal+dato_temp;
  }
  $("#monto_total").html(sumatotal);
}


function gananciaTienda(){
  var temp_tienda_selec=$("#ganancia_tienda option:selected").text(); 
  var sumatotal=0;
   // buscar tienda en su 
 for(var i=0; i<a_tienda.length;i++){
   var temp_tienda=a_tienda[i];
   if(temp_tienda===temp_tienda_selec){
     sumatotal=sumatotal+parseFloat(a_monto_emp[i]);
   }
 }
  $("#monto_tienda").html(sumatotal);
}

function gananciaCiudad(){
  var temp_ciudad_selec=$("#ganancia_ciudad option:selected").text(); 
  var sumatotal=0;
   // buscar tienda en su 
 for(var i=0; i<a_ciudad.length;i++){
   var temp_ciudad=a_ciudad[i];
   if(temp_ciudad===temp_ciudad_selec){
     sumatotal=sumatotal+parseFloat(a_monto_emp[i]);
   }
 }
  $("#monto_ciudad").html(sumatotal);
}
function agregarCiudad(){
  var temp =$("#new_ciudad").val();
  a_ciudad_select.push(temp);
  initApp();
}
function agregarTienda(){
  var temp =$("#new_tienda").val();
  a_tienda_select.push(temp);
  initApp();
}