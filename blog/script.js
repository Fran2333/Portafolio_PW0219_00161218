window.onload=()=>{
    var art1 = document.getElementById("Dia_uno");
    var art2 = document.getElementById("Dia_dos");
    var art3 = document.getElementById("Dia_tres");
    var art4 = document.getElementById("Dia_cuatro");
    var art5 = document.getElementById("Dia_cinco");

    
    var Btn1 = document.querySelector(".btn1");
    var Btn2 = document.querySelector(".btn2");
    var Btn3 = document.querySelector(".btn3");
    var Btn4 = document.querySelector(".btn4");
    var Btn5 = document.querySelector(".btn5");

    Btn1.addEventListener("click", ()=>{
        art1.style.display = "block";
        art2.style.display = "none";
        art3.style.display = "none";
        art4.style.display = "none";
        art5.style.display = "none";
    })

    Btn2.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "block";
        art3.style.display = "none";
        art4.style.display = "none";
        art5.style.display = "none";
    })

    Btn3.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "block";
        art4.style.display = "none";
        art5.style.display = "none";
    })

    Btn4.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "none";
        art4.style.display = "block";
        art5.style.display = "none";
    })

    Btn5.addEventListener("click", ()=>{
        art1.style.display = "none";
        art2.style.display = "none";
        art3.style.display = "none";
        art4.style.display = "none";
        art5.style.display = "block";
    })
}


  



