function excluir(indexExcluido) {
    let viagens = JSON.parse(localStorage.getItem("viagens"));

    let listaAtualizada = viagens.filter((item, index) => index != indexExcluido);

    localStorage.setItem("viagens", JSON.stringify(listaAtualizada));

    window.location.reload();
    return false;
}