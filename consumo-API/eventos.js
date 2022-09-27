function excluir(id){
    fetch('http://localhost:8000/compras/'+id, {
        method  : 'DELETE'
    });
    location.href = ''; // faz com que esse o atualizar nao seja executado antes do excluir
    resetTable();
    atualizarLista();
}
function resetTable()
{
    tabela_compras.innerHTML = ``;
}
function atualizarLista()
{
    fetch('http://localhost:8000/compras')
    .then(function (resposta) {   
        return  resposta.json();
    })
    .then(function (lista) {
        lista.forEach(items => {
            tabela_compras.innerHTML +=
            `
            <tr>
                <td>${items.id}</td>
                <td>${items.item}</td>
                <td>${items.quantidade}</td>
                <td>
                    <button onclick="excluir(${items.id})" class="btn btn-outline-danger">Excluir
                    </button>
                </td>
            </tr>
            `
        });
    });
}
atualizarLista();