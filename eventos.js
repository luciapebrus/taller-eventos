document.addEventListener("DOMContentLoaded", function() {
    let divstyle = document.getElementById("soydiv");
    divstyle.style.padding = "5px";
    divstyle.style.backgroundColor = "green";
});
document.addEventListener("DOMContentLoaded", function(){
    let divSaluda = document.getElementById("soydiv");
    let buttonsaluda = document.getElementById("mybutton");
    function saludaD() {
        alert("Hola ¡Soy el div!");
        }
    divSaluda.addEventListener("click", saludaD);
    
    buttonsaluda.addEventListener("click", function(){
           alert("¡Hola!");
           event.stopPropagation();
           
    });
})

//document.getElementById("soydiv").removeEventListener("click", saludaD) 