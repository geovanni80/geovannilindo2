const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Lucas é um jovem cientista brasileiro apaixonado por biotecnologia. Ele trabalha em um instituto de pesquisa local, mas enfrenta dificuldades devido à falta de recursos e oportunidades de crescimento. Certo dia, ele recebe um e-mail inesperado de uma universidade de prestígio nos Estados Unidos, oferecendo uma bolsa de estudos integral para um programa de pós-doutorado.",
        alternativas: [
            "Aceitar a oferta imediatamente.",
            "Pedir conselhos a amigos e familiares."
        ]
    },
    {
        enunciado: "Lucas decide seguir em frente com a bolsa. Ele começa a preparar sua mudança, o que envolve resolver questões pessoais e profissionais no Brasil.",
        alternativas: [
            "Passar tempo com amigos e familiares.",
            "Focar em aprender inglês intensivamente."
        ]
    },
    {
        enunciado: "Lucas chega aos Estados Unidos e começa a se adaptar à nova vida. Ele enfrenta desafios culturais e acadêmicos enquanto tenta se destacar em seu programa."
        ,
        alternativas: [
            "Focar exclusivamente nos estudos e pesquisa.",
            "Procurar apoio em grupos de estudantes internacionais."
        ]
    },
    {
        enunciado: "Após concluir seu programa de pós-doutorado com sucesso, Lucas enfrenta uma decisão difícil sobre seu futuro. Ele recebe uma oferta de emprego nos Estados Unidos, mas também tem a opção de retornar ao Brasil com sua nova experiência e conhecimentos.",
        alternativas: [
            "Aceitar a oferta de emprego nos Estados Unidos.",
            "Retornar ao Brasil para contribuir com o desenvolvimento local."
        ]
    }
];

let atual = 0;

function mostraPergunta() {
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ''; // Limpar alternativas anteriores
    perguntas[atual].alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener("click", () => {
            proximaPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function proximaPergunta() {
    if (atual < perguntas.length - 1) {
        atual++;
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';
    textoResultado.textContent = "Obrigado por participar!";
    caixaResultado.style.display = 'block';
}

mostraPergunta();
