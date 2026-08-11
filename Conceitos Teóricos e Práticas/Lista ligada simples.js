class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class Lista {
    constructor() {
        this.inicio = null;
    }

    adicionar(valor) {
        let novoNo = new No(valor);

        if (this.inicio === null) {
            this.inicio = novoNo;
        } else {
            let atual = this.inicio;

            while (atual.proximo !== null) {
                atual = atual.proximo;
            }

            atual.proximo = novoNo;
        }
    }

    mostrar() {
        let atual = this.inicio;

        while (atual !== null) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
}

let lista = new Lista();

lista.adicionar(10);
lista.adicionar(20);
lista.adicionar(30);

lista.mostrar();