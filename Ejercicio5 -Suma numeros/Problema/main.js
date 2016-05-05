var suma = 0;
var valores = []
for (var i= 0; i <10; i++){
	var a = parseInt(prompt("digite un número"));
	suma = suma + a;
	valores.push(a);
}

document.write("el resultado es " +suma + "y el arreglo " + valores);