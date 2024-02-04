let numeroSecreto = Math.floor (Math.random()*10) + 1;
let numeroUsuario =0
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;

console.log(numeroSecreto)

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }else{
            alert("El numero Secreto es mayor");
        }
       // intentos = intentos + 1; 
       //intentos += 1;
       intentos ++;
       // palabraVeces = 'veces';
        if(intentos > maximoIntentos){
            alert(`Llegaste al máximo de ${maximoIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }  
} 


