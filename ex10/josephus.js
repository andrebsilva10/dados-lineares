var Josephus = /** @class */ (function () {
    function Josephus(inicio, pessoas) {
        this.pessoas = pessoas;
        this.inicio = inicio;
    }
    Josephus.prototype.ultimaPessoa = function () {
        var eliminado = (this.inicio - 1) % this.pessoas.length;
        var posicaoAtual = 0;
        while (this.pessoas.length > 1) {
            posicaoAtual = this.pessoas[eliminado];
            console.log('Posição atual:', posicaoAtual);
            this.pessoas = this.removerElemento(this.pessoas, eliminado);
            eliminado = (eliminado + posicaoAtual) % this.pessoas.length;
        }
        console.log('Última pessoa:', this.pessoas[0]);
        return this.pessoas[0];
    };
    Josephus.prototype.removerElemento = function (pessoas, eliminado) {
        var NAO_ELIMINADOS = [];
        for (var i = 0; i < pessoas.length; i++) {
            if (i !== eliminado) {
                NAO_ELIMINADOS.push(pessoas[i]);
            }
        }
        return NAO_ELIMINADOS;
    };
    return Josephus;
}());
var j = new Josephus(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
j.ultimaPessoa();
