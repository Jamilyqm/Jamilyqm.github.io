/*Seleciona o elemento e armazena na variável, para serem acessadas e modificadas*/

var nomeStyle = document.getElementById('name')
var emailStyle = document.getElementById('email')
var senhaStyle = document.getElementById('senha')
var enderecoStyle = document.getElementById('endereco')
var complementoStyle = document.getElementById('complemento')
var error = document.getElementById('msgError')


function validateForm() {


    /*Quando o formulário for submetido (função); Obtem os valores e verifica se os campos estão vazios;
    Retorna false se algum estiver vazio, caso contrário (true) o formulário será enviado;
    Exibição da mensagem de erro com a borda vermelha e o alerta*/

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (email === "") {
        alert("Por favor, preencha o campo email")
        error.innerHTML = 'Preencha todos os campos corretamente'
        emailStyle.style.borderBottom = '2px solid red'
        return false;
    }

    /*Verificação do campo senha, se está vazio ou se tem menos de 8 caracteres;
    Exibição de alertas e modificação da aparência do campo informado*/

    if (senha === "") {
        alert("Por favor, preencha o campo senha!")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        senhaStyle.style.borderBottom = '2px solid red'
        return false;
    } else if (senha.length < 8) {
        alert("Informe uma senha com mais de 8 caracteres")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        senhaStyle.style.borderBottom = '2px solid red'
        return false;
    }
}



function campos() {

    /*Quando o formulário for submetido (função); Obtem os valores e verifica se os campos estão vazios;
    Retorna false se algum estiver vazio, caso contrário (true) o formulário será enviado;
    Exibição da mensagem de erro com a borda vermelha e o alerta*/

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var endereco = document.getElementById('endereco').value;
    var complemento = document.getElementById('complemento').value;

    if (name === "") {
        alert("Por favor, preencha seu nome")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        nomeStyle.style.border = '2px solid red'
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o campo email")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        emailStyle.style.border = '2px solid red'
        return false;
    }

    /*Verificação do campo senha, se está vazio ou se tem menos de 8 caracteres;
     Exibição de alertas e modificação da aparência do campo informado*/

    if (senha === "") {
        alert("Por favor, informe uma senha")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        senhaStyle.style.border = '2px solid red'
        return false;

    } else if (senha.length < 8) {
        alert("Informe uma senha com mais de 8 caracteres")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        senhaStyle.style.border = '2px solid red'
        return false;
    }

    if (endereco === "") {
        alert("Por favor, preencha com o seu endereço")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        enderecoStyle.style.border = '2px solid red'
        return false;
    }

    if (complemento === "") {
        alert("Por favor, preencha o campo complemento")
        error.innerHTML = 'Preencha todos os campos corretamente!'
        complementoStyle.style.border = '2px solid red'
        return false;
    }
}

/*Função chamada para exibir a mensagem "msgBV" com base na hora do dia;
Obtém a hora atual e determina se é manhã, tarde noite ou madrugada;
Modificando o conteúdo com a mensagem apropriada*/
function boasVindas() {
    var msg = document.getElementById('msgBV')
    var horario = new Date()
    var hora = horario.getHours()

    if (hora >= 5 && hora < 12) {
        msg.innerHTML = 'Bom dia! &#128522'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa tarde! &#128526'
    } else if (hora >= 18 && hora < 23) {
        msg.innerHTML = 'Boa noite! &#128564 '
    } else {
        msg.innerHTML = 'Boa madrugada! &#128372'
    }
}

/*Obtém a data e hora atual usando a variável criada e extrai o dia, mês, ano e o horário;
Modificando o conteúdo com a data e a hora formatada*/
function data() {
    var data = document.getElementById('data')
    var date = new Date()
    var dia = date.getDate()
    var mes = date.getMonth()
    var ano = date.getFullYear()
    var hora = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()

    data.innerHTML = `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`

}

/*Informar só números na senha*/
function validarNumero(input){
    input.value = input.value.replace(/\D/g, '');
}