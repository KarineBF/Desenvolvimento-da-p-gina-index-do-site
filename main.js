function topo(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}


function login(){
    var email = document.getElementById("exampleInputEmail1").value;
    var senha = document.getElementById("exampleInputPassword1").value;

    if(email && senha){
        alert("Login bem-sucedido! Bem-vindo(a) ");
    }
    else{
        alert("Por favor, preencha todos os campos");
    }
}

function cadastrar(){
    var usuario = document.getElementById("validationCustom01").value;
    var email = document.getElementById("exampleFormControlInput1").value;
    var senha = document.getElementById("inputPassword").value;

    if(usuario && email && senha){
        alert("Cadastro bem-sucedido! Bem-vindo(a) " + usuario);
        
    }
    
    else{
        alert("Por favor, preencha todos os campos");
    }
    
}
