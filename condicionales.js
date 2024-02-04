let diaSemana = prompt ("¿Qué día es hoy?"); 

console.log(diaSemana);
/* Este codigo pide el día de la semana*/

if(diaSemana == "sabado") {
    alert('Buen fin de semana');
}
if(diaSemana == "domingo") {
    alert("Buen fin de semana")
} else{
    alert("¡Buena semana!");
}


let numero = prompt ("deme un número, por favor");

console.log(numero);

if(numero > 0){
    alert("es un numero positivo")
}else{
    alert("Es un numero negativo");
}


let puntuacion = prompt ("Su puntuación, por favor");

if(puntuacion > 100){
    alert("¡Felicidades, has ganado!")
}else{
    alert("Intenta nuevamente para ganar");
}

let saldoDisponible = 1500;
let debito = prompt ("¿Cantidad a debitar?");
let balance = saldoDisponible - debito;
if (balance > 0){
    alert(`Su nuevo saldo es: ${balance}`);
}else{
    alert("FONDOS INSUFICIENTES");
}

let usuario = prompt("Digite su nombre, por favor");
alert(`Bienvenido y bendecido seas ${usuario}`);