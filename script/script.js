let nome = document.getElementById('nome');
let email = document.getElementById('email');
let mensagem = document.getElementById('mensagem');

function enviar() {
    if(nome.value == "" || email.value == "" || mensagem.value == ""){
        alert("Todos os campos devem ser preenchidos!")
        return false
    }else{
        alert("Olá " + nome.value + "! Sua mensagem foi enviada com sucesso!")
        return true
    }
}