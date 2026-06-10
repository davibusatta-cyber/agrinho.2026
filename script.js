
// ===== FUNCIONALIDADE DE ACESSIBILIDADE =====
let tamanhoFonteAtual = 16; // em pixels

function aumentarFonte() {
    tamanhoFonteAtual += 2;
    document.body.style.fontSize = tamanhoFonteAtual + "px";
}

function diminuirFonte() {
    if (tamanhoFonteAtual > 12) {
        tamanhoFonteAtual -= 2;
        document.body.style.fontSize = tamanhoFonteAtual + "px";
    }
}

function ativarAltoContraste() {
    document.body.classList.toggle("alto-contraste");
}

// Associar os botões de acessibilidade
document.getElementById("btnAumentarFonte").addEventListener("click", aumentarFonte);
document.getElementById("btnDiminuirFonte").addEventListener("click", diminuirFonte);
document.getElementById("btnAltoContraste").addEventListener("click", ativarAltoContraste);

// ===== FUNCIONALIDADE PRINCIPAL: AVALIAÇÃO DE HÁBITOS AMBIENTAIS =====
function calcularAvaliacao() {
    // Coletar respostas
    const p1 = document.querySelector('input[name="p1"]:checked');
    const p2 = document.querySelector('input[name="p2"]:checked');
    const p3 = document.querySelector('input[name="p3"]:checked');
    const p4 = document.querySelector('input[name="p4"]:checked');
    const p5 = document.querySelector('input[name="p5"]:checked');

    if (!p1 || !p2 || !p3 || !p4 || !p5) {
        alert("⚠️ Por favor, responda todas as perguntas antes de ver o resultado!");
        return;
    }

    let pontuacao = 
        parseInt(p1.value) +
        parseInt(p2.value) +
        parseInt(p3.value) +
        parseInt(p4.value) +
        parseInt(p5.value);

    let mensagem = "";
    let dicasPersonalizadas = "";
    let emoji = "";

    // Classificação e dicas com base na pontuação (mín 5, máx 15)
    if (pontuacao >= 12) {
        emoji = "🌿🏆";
        mensagem = "PARABÉNS! Seus hábitos são MUITO SUSTENTÁVEIS!";
        dicasPersonalizadas = "Continue assim! Você é um exemplo de cuidado com o solo e o meio ambiente. Compartilhe seu conhecimento com outras pessoas!";
    } 
    else if (pontuacao >= 8) {
        emoji = "🌱📈";
        mensagem = "VOCÊ ESTÁ NO CAMINHO CERTO!";
        dicasPersonalizadas = "Continue evoluindo! Comece a separar o lixo corretamente, evite desperdícios e aprenda mais sobre agricultura sustentável.";
    } 
    else {
        emoji = "⚠️🔄";
        mensagem = "SEUS HÁBITOS PRECISAM DE MELHORIA!";
        dicasPersonalizadas = "Ainda dá tempo de mudar! Reduza o desperdício, plante árvores, prefira alimentos orgânicos e informe-se sobre conservação do solo.";
    }

    // Exibir resultado
    const resultadoDiv = document.getElementById("resultadoAvaliacao");
    resultadoDiv.innerHTML = `
        <h3>${emoji} Resultado da sua avaliação</h3>
        <p><strong>📊 Pontuação:</strong> ${pontuacao} de 15 pontos</p>
        <p>${mensagem}</p>
        <p><strong>📌 Dica personalizada:</strong> ${dicasPersonalizadas}</p>
        <p><em>🔄 Refaça a avaliação sempre que quiser acompanhar sua evolução!</em></p>
    `;
}

// Associar botão "Ver Resultado"
document.getElementById("btnVerResultado").addEventListener("click", calcularAvaliacao);

// ===== FUNCIONALIDADE ADICIONAL: SIMULADOR DE ECONOMIA DE SOLO =====
function calcularEconomiaSolo() {
    // Pegar valores do formulário
    const areaInput = document.getElementById("areaPlantio");
    const tecnicaSelect = document.getElementById("tecnicaSustentavel");
    
    let area = parseFloat(areaInput.value);
    const fatorEconomia = parseFloat(tecnicaSelect.value);
    
    // Validar entrada
    if (isNaN(area) || area <= 0) {
        document.getElementById("resultadoEconomia").innerHTML = `
            <p>❌ Por favor, digite uma área válida (maior que zero)!</p>
        `;
        return;
    }
    
    // Calcular solo preservado
    const soloPreservado = area * fatorEconomia;
    const soloPerdido = area * (1 - fatorEconomia);
    
    // Determinar mensagem motivacional
    let motivacao = "";
    if (fatorEconomia >= 0.7) {
        motivacao = "Excelente escolha! Esta técnica é altamente eficiente! 🌟";
    } else if (fatorEconomia >= 0.5) {
        motivacao = "Boa escolha! Você está no caminho da sustentabilidade! 🌱";
    } else {
        motivacao = "Toda técnica sustentável ajuda! Continue aprendendo! 📚";
    }
    
    // Exibir resultado
    const resultadoDiv = document.getElementById("resultadoEconomia");
    resultadoDiv.innerHTML = `
        <p>📐 <strong>Área total:</strong> ${area.toFixed(2)} m²</p>
        <p>✅ <strong>Solo preservado:</strong> ${soloPreservado.toFixed(2)} m²</p>
        <p>⚠️ <strong>Solo que seria degradado sem a técnica:</strong> ${soloPerdido.toFixed(2)} m²</p>
        <p>💚 <strong>${motivacao}</strong></p>
        <p>🌍 Preservar o solo é garantir alimento para o futuro!</p>
    `;
}

// Associar botão do simulador
document.getElementById("btnCalcularEconomia").addEventListener("click", calcularEconomiaSolo);

// ===== MENSAGEM DE BOAS-VINDAS (opcional, apenas para engajamento) =====
window.addEventListener("load", function() {
    console.log("🌱 Site Raízes do Futuro carregado com sucesso!");
    console.log("💚 Lembre-se: conservar o solo é conservar a vida!");
});
