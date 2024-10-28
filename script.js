document.addEventListener('DOMContentLoaded', function () {
    const nivelAgua = document.getElementById('nivel-agua');
    const nivelTexto = document.getElementById('nivel-texto');
    const alerta = document.getElementById('alerta');

    // Função para atualizar o nível da água
    function atualizarNivel(valor) {
        nivelAgua.value = valor;
        nivelTexto.textContent = `${valor}%`;

        // Alerta de nível alto
        if (valor > 40) {
            alerta.classList.add('mostrado', 'alto');
            alerta.classList.remove('baixo'); // Remove classe baixo
            alerta.textContent = "⚠️ Alerta: O nível da água está acima do limite seguro! ⚠️";
        }
        // Alerta de nível baixo
        else {
            alerta.classList.add('mostrado', 'baixo');
            alerta.classList.remove('alto'); // Remove classe alto
            alerta.textContent = "⚠️ Alerta: O nível da água está muito baixo! ⚠️";
        }
    }

    // Simulação do nível de água (substitua pelo valor real)
    let nivelAtual = 0;
    setInterval(() => {
        nivelAtual = (nivelAtual + 5) % 101; // Incrementa o nível e reinicia após 100%
        atualizarNivel(nivelAtual);
    }, 5000); // Atualiza a cada segundo
});
