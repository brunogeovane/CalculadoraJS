function botao (numero){
	var salvo = document.calc.visor.value;
	document.calc.visor.value = salvo + numero;
}

var form = document.getElementById('calc');
var campo = document.getElementById('visor');

function mostrarValor() {
	var campo = document.getElementById('visor');
    var valorVisor = eval(document.getElementById("visor").value);
	campo.value = valorVisor;
}
function limpar() {
document.getElementById('visor').value='';	
}
function sobre(){
	alert ("desenvolvido por Bruno Geovane\n contato:bgstudiocontato@gmail.com");
}