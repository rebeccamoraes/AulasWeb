document.addEventListener("DOMContentLoaded", atualizaTabela)


function atualizaTabela(){
    let tbody = document.getElementById("table-body");
    
    let viagens = JSON.parse(localStorage.getItem("viagens"));
    viagens.forEach((viagem, index )=> {
        tbody.innerHTML += "<tr>"
            +"<td>" + viagem.origem + "</td>"
            +"<td>" + viagem.destino + "</td>"
            +"<td>" + viagem.partida + "</td>"
            +"<td>"+ viagem.chegada + "</td>"
            + "<td class=\"actions\"><a href=\"editar-viagem.html\">Editar</a>"
            + "<a href=\"#\" class=\"delete\" onclick=\"excluir("+index+")\">Excluir</a></td></tr>";
    });
}