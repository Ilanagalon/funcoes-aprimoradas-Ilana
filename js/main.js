import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";


const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document. querySelector ("novamente-btn");


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
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes =  aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    botaoJogarNovamente. addEventListener("click", jogarnovamente);
}

function jogarnovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

mostraPergunta();








