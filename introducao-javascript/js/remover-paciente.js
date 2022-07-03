

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();    
    }, 500);


//    var alvo = event.target;
//    var paiAlvo = alvo.parentNode; // TR = paciente = remover
//    paiAlvo.remove();
})