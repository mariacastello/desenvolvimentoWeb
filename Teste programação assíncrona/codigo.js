document.getElementById("buscarJogador").addEventListener("click", async () => {
    try {
        const jogadorInfo = document.getElementById("jogador-info");
        jogadorInfo.innerHTML = "Carregando informações do jogador...";

        const url = "https://botafogo-atletas.mange.li";

        //aguardando resposta
        const resposta = await fetch(url);

        if (resposta.ok) {
            const dados = await resposta.json();

            //limpando para exibir dados
            jogadorInfo.innerHTML = "";
            criaCartao(dados);
        } else {
            jogadorInfo.innerHTML = "Erro ao buscar informações do jogador.";
        }
    } catch (error) {
        console.error("Erro na solicitação:", error);
    }
});

const criaCartao = (atleta) => {
    const jogadorInfo = document.getElementById("jogador-info");
    jogadorInfo.innerHTML = `
        <div style="width: 20rem; background-color: #ccc; text-align: center; margin: auto;">
            <h3>${atleta.nome}</h3>
            <img src="${atleta.imagem}" alt="foto de ${atleta.nome}">
            <p>${atleta.descricao}</p>
        </div>
    `;
};
