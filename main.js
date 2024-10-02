const form = document.getElementById('form');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('inputNome');
    const inputTelefone = document.getElementById('inputTelefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;
}