

function suma(lista){
    
    let suma=0;
    let promedio=0;
    let respuesta="";
    lista.forEach(element => {
        suma=suma+element;
    });
    promedio=suma/lista.length;
    respuesta=`la suma es ${suma}\n el promedio es ${promedio}\n`;
    console.log(respuesta);
}

