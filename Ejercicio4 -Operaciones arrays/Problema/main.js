var valores = [true, 5, false, "hola", "adios", 2];
var resultado = valores[0] || valores[2];
var resultado2 = valores[0] && valores[2];
if(valores[3].length > valores[4].length){
	alert( valores[3]+" es mayor");
}
else if (valores[3].length < valores[4].length){
	alert(valores[4]+" es mayor");
}
else if (valores[3].length = valores[4].length){
	alert("son iguales");
}

alert("true || false es: " + resultado + "y \n" + "true && false es: " + resultado2 );
alert("el resultado en las 5 operaciones :\n" + "suma" + parseInt(valores[1] + valores[5]) 
	+ " \n resta" + parseInt(valores[1] - valores[5]) + "\n multiplicacion" + parseInt(valores[1] * valores[5])+ 
	" \n division" + parseInt(valores[1] / valores[5]) + "\n resto" + parseInt(valores[1] % valores[5]) );