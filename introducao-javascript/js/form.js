
var buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    // ---------------------------------Extraindo infos do paciente do form--------------------------------- // 
    
    var paciente = obtemPacienteDoFormulario(form)


    // ---------------------------------Valida Paciente -------------------------------- //

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    // ---------------------------------Add Paciente na Tabela--------------------------------- // 

    addPacienteNaTable(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""
});

function addPacienteNaTable(paciente){
    // ----------------------------Cria tr e td do paciente---------------------------- // 
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
 
// ---------------------------------------Form Paciente--------------------------------------- // 

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    //limpa erros anteriores
    ul.innerHTML = "";

    //confere erros e mostra mensagem
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// ---------------------------------------Cria tr e td do paciente--------------------------------------- // 

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    console.log(pacienteTr);

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));   
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura")); 
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));      

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

// ------------------------ Valida Paciente -------------------------- // 

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("Você se esqueceu de digitar o Nome!");

    if(!validaPeso(paciente.peso)) erros.push("O Peso é Inválido!");
    if(paciente.peso.length == 0) erros.push("Você se esqueceu de digitar o Peso!");  

    if(!validaAltura(paciente.altura)) erros.push("A Altura é inválida!");
    if(paciente.altura.length == 0) erros.push("Você se esqueceu de digitar a Altura!");    

    if(paciente.gordura.length == 0) erros.push("Você se esqueceu de digitar a Gordura!");
    
    return erros;
}