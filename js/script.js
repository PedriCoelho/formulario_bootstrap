document.getElementById('Button').addEventListener('click', function () {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    const resposta = nome + "<br>" + sobrenome + "<br>" + email + "<br>" + senha + "<br>" + cidade + "<br>" + estado;

    document.getElementById('resposta').innerHTML = resposta;

});