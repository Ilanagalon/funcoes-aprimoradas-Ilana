const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais materiais podem ser reciclados?",
        alternativas: [
            {
                texto: "Plásticos,papelão,vidro,alumínio",
                afirmacao: "Parabéns você acertou, esses são os lixos recicláveis ",
            },
            {
                texto: "Lâmpada, espelho, ampola de remédio, óculos",
                afirmacao: "Que pena, você errou, esses não são ps lixos recicláveis ",
            }
        ]
    },
    {
        enunciado: "Quais são os diferentes tipos de plásticos que podem ser recicláveis?",
        alternativas: [
            {
                texto: "Polipropileno(cabide), polietileno(garrafas de água)",
                afirmacao: "Esses são os plásticos corretos para fazer o reciclagem",
            },
            {
                texto: "Plástico PVC e ácido polilático ",
                afirmacao: "Esses não são plásticos adequados para a reciclagem ",
            }
        ]
    },
    {
        enunciado: "O que é coleta?",
        alternativas: [
            {
                texto: "É a separação do lixo em devidas cores ",
                afirmacao: "Essa é a forma correta de separação ",
            },
            {
                texto: "São lixos que podem ser misturados ",
                afirmacao: "São formas erradas de coleta seletiva",
            }
        ]
    },
    {
        enunciado: "O que são resíduos líquidos?",
        alternativas: [
            {
                texto: "São materiais não aproveitados que se encontram no estado líquido",
                afirmacao: "Parabéns, você acertou essa é a afirmação correta ",
            },
            {
                texto: " São materias recicláveis que podem ser reutilizados ",
                afirmacao: "Que pena, essa não é a resposta correta ",
            }
        ]
    },
    {
        enunciado: "Onde é o lugar correto para descartar os lixos?",
        alternativas: [
            {
                texto: "Em lixeiras próximas para que seja digerida aos lixões ",
                afirmacao: "Essa é a resposta certa parabéns",
            },
            {
                texto: "Nas ruas ou em qualquer lugar onde estiver",
                afirmacao: "Infelizmente não é a forma correta ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("buttom");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();








