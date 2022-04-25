
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let mensagem = document.querySelector('#mensagem');
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;
let mapa = document.querySelector('#mapa');

function validarNome() {
    let txtNome = document.querySelector('.txtNome');
    if(nome.value.length < 3) {
       txtNome.innerHTML = 'Nome inválido';
       txtNome.style.color = 'red';
    }
    else {
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'blue';
        nomeOk = true;
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('.txtEmail')
    // IndexOf --> 1 retorna true(existe) | -1 retorna false(não existe)
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { // Verifica se não tem o @
        txtEmail.innerHTML = 'Email inválido';
        txtEmail.style.color = 'red';
    }
    else {
        txtEmail.innerHTML = 'Email válido';
        txtEmail.style.color = 'blue';
        emailOk = true;
    }
}

function validarMensagem() {
    let txtMensagem = document.querySelector('.txtMensagem');

    if(mensagem.value.length >= 10) {
        txtMensagem.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres';
        txtMensagem.style.color = 'red';
        //txtMensagem.style.display = 'block';
    }
    else {
        txtMensagem.innerHTML = 'Texto válido';
        txtMensagem.style.color = 'blue';
        //txtMensagem.style.display = 'none';
        mensagemOk = true;
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert("Formulário enviado com sucesso!")
        return true
    }else {
        alert("Olá " + nome.value + "! Preencha o formulário corretamente antes de enviar.")
        return false
    }
}

function zoomMap() {
    mapa.style.width = '1178px';
    mapa.style.height = '400px';
}

function normalMap() {
    mapa.style.width = '1078px';
    mapa.style.height = '300px';
}


