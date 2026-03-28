const limiteMaximo = 10;
const numeroSecreto = Math.floor(Math.random() * limiteMaximo) + 1;

const titulo = document.querySelector(".container__texto h1");
const subtitulo = document.querySelector(".container__texto h2");
const inputChute = document.getElementById("input-chute");
const botaoChutar = document.getElementById("btn-chutar");

let tentativas = 0;

function verificarChute() {
    const chute = Number(inputChute.value);

    if (isNaN(chute) || chute < 1 || chute > limiteMaximo || !Number.isInteger(chute)) {
        subtitulo.textContent = `Digite um número inteiro válido entre 1 e ${limiteMaximo}.`;
        inputChute.value = "";
        inputChute.focus();
        return;
    }

    tentativas++;

    if (chute === numeroSecreto) {
        const palavraTentativa = tentativas === 1 ? "tentativa" : "tentativas";
        titulo.innerHTML = 'Você <span class="container__texto-azul">acertou!</span>';
        subtitulo.textContent = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        inputChute.style.display = "none";
        botaoChutar.textContent = "Jogar novamente";
        botaoChutar.onclick = () => window.location.reload();
    } else if (chute > numeroSecreto) {
        subtitulo.textContent = "O número secreto é menor. Tente novamente!";
        inputChute.value = "";
        inputChute.focus();
    } else {
        subtitulo.textContent = "O número secreto é maior. Tente novamente!";
        inputChute.value = "";
        inputChute.focus();
    }
}

botaoChutar.addEventListener("click", verificarChute);

inputChute.addEventListener("keydown", (e) => {
    if (e.key === "Enter") verificarChute();
});