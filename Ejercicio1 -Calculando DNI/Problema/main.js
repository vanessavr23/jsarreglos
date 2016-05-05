var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var n;
function dni (){
	var a = parseInt(prompt("dame el número de tu dni"));
	var total = 0;
	total = (a % 23);
	if (total ===n){
		document.write(letras[n])
	}
}
dni();