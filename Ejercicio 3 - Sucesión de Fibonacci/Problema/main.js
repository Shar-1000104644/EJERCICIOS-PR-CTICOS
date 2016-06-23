//Escribe aquí tú código

// function calcular(){
// 	var numero = document.getElementById('dato').value;
// 	var sucesion = [];
// 	var resultado = 1;

// 	if(!isNaN(numero)){
// 		for(var i=0 ; i=numero; i++){
// 			sucesion.push(numero);
// 			resultado +=sucesion[i]; 
// 			function escribir();
// 		}
// 	}else{
// 		alert('Ingresa un número');
// 	}
// }

// function escribir(){
// 	var letra= document.createElement('p');
// 	var l = document.createTextNode('La sucesión es:' + sucesion.length);
// 	letra.appendChild(l);
// 	document.body.appendChild(letra);
// }

            var var1 = 0;
            var var2 = 1;
            var var3;
 
            document.write(var1+"");
            document.write(var2+"");
 
            for(var i=3; i <= numero;i++)
            {
                var3 = var1 + var2;
                var1 = var2;
                var2 = var3;
                document.write(var3+"");
            }
        