//Escribe aquí tú código

function calcular(){
    var var1 = 0;
    var var2 = 1;
    var var3;
    var numero=parseInt(document.getElementById('dato').value);
    document.getElementById('dato').value='';

    mostrar('A','a',var1);
    mostrar('B','c',var2);


    // var A = document.createElement('p');
    // var a=document.createTextNode(var1);
    // A.appendChild(a);
    // document.body.appendChild(A);

    // var B = document.createElement('p');
    // var b=document.createTextNode(var2);
    // B.appendChild(b);
    // document.body.appendChild(B);

    for(var i=3; i<=numero; i++)
    {
        var3 = var1 + var2;
        var1 = var2;    
        var2 = var3;

    mostrar('C','c',var3);

    // var C = document.createElement('p');
    // var c=document.createTextNode(var3);
    // C.appendChild(c);
    // document.body.appendChild(C); 

    }    
}

/*Esta función reemplaza a todo lo que esta en comentario, porque se repite mucho :c  y me daba flojera escribir */

function mostrar(_elemento,_texto,_variable){
    var _elemento = document.createElement('p');
    var _texto=document.createTextNode(_variable);
    _elemento.appendChild(_texto);
    document.body.appendChild(_elemento);

}


// var a=0; var b=1; var c; var i; var x; 
// x = prompt("Cuantos numeros quieres que te muestre?");
// document.write(a+" "); 
// document.write(b+" "); 
// for(i=3;i<=x;i++) 
// { 
// c=a+b; a=b; b=c; 
// document.write(c+" ");}