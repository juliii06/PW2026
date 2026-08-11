class NoArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

let raiz = new NoArvore(10);

raiz.esquerda = new NoArvore(5);
raiz.direita = new NoArvore(15);

console.log("Raiz:", raiz.valor);
console.log("Esquerda:", raiz.esquerda.valor);
console.log("Direita:", raiz.direita.valor);