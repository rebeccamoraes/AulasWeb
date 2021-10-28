document.addEventListener("DOMContentLoaded", atualizaTabela)


function atualizaTabela(){
    let tbody = document.getElementById("table-body");
    
    let viagens = JSON.parse(localStorage.getItem("viagens"));
    viagens.forEach(viagem => {
        tbody.innerHTML += "<tr>"
            +"<td>" + viagem.origem + "</td>"
            +"<td>" + viagem.destino + "</td>"
            +"<td>" + viagem.partida + "</td>"
            +"<td>"+ viagem.chegada + "</td>"
            + "<td class=\"actions\"><a href=\"editar-viagem.html\">Editar</a>"
            + "<a href=\"#\" class=\"delete\">Excluir</a></td></tr>";
    });
}