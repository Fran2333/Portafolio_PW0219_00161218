function arreglo(lista){
    
    let contnum=0;
    let contstg=0;
    let contbol=0;
    let contobj=0;
    let respuesta="";
    lista.forEach(element => {
      console.log(typeof element); 
    
    switch(typeof element){

        case 'boolean':
         contbol++;
        break;

        case 'number':
          contnum++;        
        break;
    
       case 'object':
         contobj++;
       break;
             
       case 'string':
          contstg++;

    }
    
     });
    
     respuesta=`en la lista hay ${contnum} numeros, ${contbol} boleanos,${contstg} strings,${contobj} objetos`;
     console.log(respuesta);

    }
