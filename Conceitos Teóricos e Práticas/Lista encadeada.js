class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

let primeiro = new No(10);
let segundo = new No(20);
let terceiro = new No(30);

primeiro.proximo = segundo;
segundo.proximo = terceiro;

let atual = primeiro;

while (atual !== null) {
    console.log(atual.valor);
    atual = atual.proximo;
}