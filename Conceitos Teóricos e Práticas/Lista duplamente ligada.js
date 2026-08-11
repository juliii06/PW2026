class NoDuplo {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

class ListaDupla {
    constructor() {
        this.inicio = null;
    }

    adicionar(valor) {
        let novo = new NoDuplo(valor);

        if (this.inicio === null) {
            this.inicio = novo;
        } else {
            let atual = this.inicio;

            while (atual.proximo !== null) {
                atual = atual.proximo;
            }

            atual.proximo = novo;
            novo.anterior = atual;
        }
    }
}

let listaDupla = new ListaDupla();

listaDupla.adicionar(10);
listaDupla.adicionar(20);
listaDupla.adicionar(30);

console.log(listaDupla);