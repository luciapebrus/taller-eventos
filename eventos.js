document.addEventListener("DOMContentLoaded", function() {
    let thebutton = document.getElementById("button");
    thebutton.style.padding = "5px";
    thebutton.style.backgroundColor = "green";
});
document.addEventListener("DOMContentLoaded", function() {
    let divSaluda = document.getElementById("soydiv");
    divSaluda.addEventListener("click", function() {
        alert("Hola ¡Soy el div!")
    })
}
)