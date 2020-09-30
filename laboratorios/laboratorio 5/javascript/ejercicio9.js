function circunferencia(){

    let respuesta="";
    let radio =parseInt(prompt("ingrese el radio:"));
    let area= 3.1416*radio*radio;
    
    if(radio==0||radio==-1){
        return -1;
    }else{
        respuesta=`el area de la circunferencia es: ${area}`;
        console.log(respuesta);
    }
    
}