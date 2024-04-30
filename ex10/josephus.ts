class Josephus {
    private pessoas: number[];
    private inicio: number;

    constructor(inicio: number, pessoas: number[]) {
        this.pessoas = pessoas;
        this.inicio = inicio;
    }

    public ultimaPessoa(): number {
        let eliminado = (this.inicio - 1) % this.pessoas.length;
        let posicaoAtual = 0;

        while (this.pessoas.length > 1) {
            posicaoAtual = this.pessoas[eliminado];
            console.log('Posição atual:', posicaoAtual);

            this.pessoas = this.removerElemento(this.pessoas, eliminado);

            eliminado = (eliminado + posicaoAtual) % this.pessoas.length;
        }

        console.log('Última pessoa:', this.pessoas[0]);
        return this.pessoas[0];
    }

    private removerElemento(pessoas: number[], eliminado: number) {
        const NAO_ELIMINADOS = [];

        for (let i = 0; i < pessoas.length; i++) {
            if (i !== eliminado) {
                NAO_ELIMINADOS.push(pessoas[i]);
            }
        }

        return NAO_ELIMINADOS;
    }
}

const j = new Josephus(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
j.ultimaPessoa();
