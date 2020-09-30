function ocurrencias(numero,lista){
    let ocurrencias=0;
    lista.forEach(element => {
        if(element==numero){
            ocurrencias++;
        }
    });


    return ocurrencias;
}
