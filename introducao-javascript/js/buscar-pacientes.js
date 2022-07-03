var adiciona = document.querySelector("#buscar-pacientes");

adiciona.addEventListener("click", function(){
    console.log("buscando...")

    var xhr = new XMLHttpRequest();  ////////////////////// buscando algo pela URL.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");   //// tipo de texto e URL

    xhr.addEventListener("load", function(){ ///// função pra "ouvir" load (carregamento), e executar algo 
            
        var erroAjax = document.querySelector("#erro-ajax");   

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;     ///// .responseText funciona como se fosse um .textContent
            var pacientes = JSON.parse(resposta); ///// transforma aquele objeto da URL que estava em string, para objeto em javascript

            pacientes.forEach(function(paciente){
                addPacienteNaTable(paciente);
            });
        } else{
            console.log(xhr.status, xhr.responseText);    
            erroAjax.classList.remove("invisivel")    
        }




    });

    xhr.send();  ///// enviar informações para a pg.

})