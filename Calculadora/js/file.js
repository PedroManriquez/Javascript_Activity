function sumar(){
	var num_uno= parseInt(document.getElementById("num1").value);
	var num_dos= parseInt(document.getElementById("num2").value);
	var resultado=document.getElementById("resultado");
	resultado.innerHTML= num_dos+num_uno;
}
function multiplicar(){
	var num_uno= parseInt(document.getElementById("num1").value);
	var num_dos= parseInt(document.getElementById("num2").value);
	var resultado=document.getElementById("resultado");
	resultado.innerHTML= num_dos*num_uno;
}
function restar(){
	var num_uno= parseInt(document.getElementById("num1").value);
	var num_dos= parseInt(document.getElementById("num2").value);
	var resultado=document.getElementById("resultado");
	resultado.innerHTML= num_uno-num_dos;
}
function dividir(){
	var num_uno= parseInt(document.getElementById("num1").value);
	var num_dos= parseInt(document.getElementById("num2").value);
	var resultado=document.getElementById("resultado");
	resultado.innerHTML= num_uno/num_dos;
}