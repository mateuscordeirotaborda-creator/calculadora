let expressao = "";

const resultado = document.getElementById("resultado");
const operacao = document.getElementById("operacao");

function atualizar() {
    operacao.textContent = expressao;
    resultado.textContent = expressao || "0";
}

function adicionar(valor) {

    if(valor === ","){
        return;
    }

    expressao += valor;
    atualizar();
}

function limparTudo(){
    expressao = "";
    atualizar();
}

function limparEntrada(){
    expressao = expressao.slice(0,-1);
    atualizar();
}

function calcular(){

    try{

        let resposta = eval(expressao);

        resultado.textContent = resposta;
        operacao.textContent = expressao + " =";
        expressao = resposta.toString();

    }catch{

        resultado.textContent = "Erro";
        expressao = "";

    }

}