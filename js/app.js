function adivinaAleatorio(){
    let numeroAleatorio = Math.floor((Math.random()*(1001-1))+1);
    document.getElementById('resultado').innerHTML = 'Número aleatorio = ' + numeroAleatorio;
    let contador = 1;
    let respuesta = prompt('Introduzca un numero del 1 al 1000');
    while(Number(respuesta)!==numeroAleatorio && contador<30){
        if(respuesta<numeroAleatorio){
            respuesta = prompt('El número es mayor que el introducido. Inténtelo de nuevo');
        }else{
            respuesta = prompt('El número es menor que el introducido. Inténtelo de nuevo');
        }
        contador++;
        document.getElementById('contador').innerHTML = 'Intentos = ' + contador;
    }
    if(contador==30){
        alert('Has superado el número máximo de intentos. Perdiste!');
    }else{
        alert('Enhorabuena. Has acertado');
    }
    
}