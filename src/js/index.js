let totalCadastros = 0;
let nomes = [];
let telefones = [];
let dataNascimento = [];
let notas = [];

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let dataInput = document.getElementById("data").value;
    data = new Date(dataInput);
    dataFormatada = data.toLocaleDateString('pt-BR', {
        timeZone: 'UTC'
    });
    let nota = document.getElementById("nota").value;
    nomes[totalCadastros] = nome
    telefones[totalCadastros] = telefone
    dataNascimento[totalCadastros] = dataFormatada
    notas[totalCadastros] = nota
    document.getElementById("usuarios").innerHTML += "<p onclick='exibir(" + totalCadastros + ")'>" + nome;
    totalCadastros++;
    alert("Cadastrado com sucesso!")
}

function exibir(indice) {
    document.getElementById("tudo").innerHTML =
        "<strong>Nome:</strong> " + nomes[indice] +
        "<br><strong>Telefone:</strong> " + telefones[indice] +
        "<br><strong>Data de Nascimento:</strong> " + dataNascimento[indice] +
        "<br><strong>Nota Final do Curso:</strong> " + notas[indice];
}