//Escribe aquí tú código

// var mesesLista = ['enero','febrero','marzo'];
// var mesesLista = new Array(3);

// function wao(){
// var dinero = document.getElementById('cantidad').value;
// dinero=parseInt(dinero);
// var mes = document.getElementById('mes').value;
// 	for(var i=0; i>mesesLista.length; i++){
// 		if(mes===0){
// 			mesesLista[0][i]=dinero;
// 			mesesLista.push(dinero);
// 			document.getElementById('cantidad').value='';
// 			document.getElementById('mes').value='';
// 			alert(mesesLista[0][i]);
// 		}
// 		if(mes===1){
// 			mesesLista[1][i]=dinero;
// 			mesesLista.push(dinero);
// 			document.getElementById('cantidad').value='';
// 			document.getElementById('mes').value='';
// 			alert(mesesLista[1][i]);
// 		}
// 		if(mes===2){
// 			mesesLista[2][i]=dinero;
// 			mesesLista.push(dinero);
// 			document.getElementById('cantidad').value='';
// 			document.getElementById('mes').value='';
// 			alert(mesesLista[2][i]);
// 		}	
// 	}
// }


var mesesLista = new Array();
mesesLista[0]=1,2,3,4,5;
mesesLista[1]=6,7,8,9,10;
mesesLista[2]=11,12,13,14,15;
mesesLista[3]=16,17,18,19,20;

mesesLista[0][0]=10;
mesesLista[0][1]=20;
mesesLista[0][2]=30;

mesesLista[1][0]=40;
mesesLista[1][1]=50;
mesesLista[1][2]=60;

mesesLista[2][0]=70;
mesesLista[2][1]=80;
mesesLista[2][2]=90;

alert(mesesLista[0][3]);