// Declaração de variáveis para elementos do DOM e manter o estado do jogo
const tentativaInput = document.getElementById('tentativa'); // Campo de entrada para chutar um número
const buttonChutar = document.getElementById('botao-chutar'); // Botão para confirmar o chute
const mensagem = document.getElementById('mensagem'); // Elemento para mostrar mensagens ao jogador
const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um número secreto entre 1 e 100
let tentativas = 0; // Contador de tentativas do jogador

// Funcionamento principal do jogo, que é ativado quando o botão é clicado
buttonChutar.addEventListener('click', function() {
    const tentativa = Number(tentativaInput.value); // Obtém e converte o valor da entrada para número
    tentativas++; // Incrementa o número de tentativas

    if(tentativa === numeroSecreto) { // Verifica se o chute está correto
        mensagem.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas.`; // Mande uma mensagem de sucesso
    } else if (tentativa < numeroSecreto) { // Se o chute for menor que o número secreto
        mensagem.textContent = 'Tente um número maior!'; // Dê uma dica ao jogador
    } else { // Se o chute for maior que o número secreto
        mensagem.textContent = 'Tente um número menor!'; // Dê outra dica ao jogador
    }
});

// Função para reiniciar o jogo, se você desejar implementar
function reiniciarJogo() {
    tentativas = 0; // Reinicia as tentativas
    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um novo número secreto
    mensagem.textContent = ''; // Limpa a mensagem
    tentativaInput.value = ''; // Limpa o campo de entrada
}

// Aqui você poderia adicionar um botão para reiniciar o jogo e ligar a função acima a ele