window.onload = () => {
    let viagens = localStorage.getItem("viagens");
    if(!viagens) {
        localStorage.setItem("viagens", JSON.stringify([]));
    }
}

function salvar(event) {
    event.preventDefault();
    let viagem = {};
    
    viagem.origem  = document.getElementById("origem").value;
    viagem.destino = document.getElementById("destino").value;
    viagem.partida = document.getElementById("data_partida").value;
    viagem.chegada = document.getElementById("data_chegada").value;

    let viagens = JSON.parse(localStorage.getItem("viagens"));

    viagens.push(viagem);

    localStorage.setItem("viagens", JSON.stringify(viagens));
}