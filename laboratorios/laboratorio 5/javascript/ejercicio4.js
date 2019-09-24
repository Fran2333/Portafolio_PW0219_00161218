function ramdon(){

    let lista1=[];
    let numero=parseInt(prompt("ingrese un numero"));
    for(var i=0;i<20;i++){
        lista1.push(Math.floor(Math.random() * 100) + 1);
    }    
    
    if(lista1.indexOf(numero)!=-1){
       console.log("gano")
    }else{
        console.log("perdio")
    }

}