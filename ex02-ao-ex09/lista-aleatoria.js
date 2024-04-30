var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var LISTAAleatoria = /** @class */ (function () {
    function LISTAAleatoria(n) {
        this.LISTA = [];
        var aleatorio;
        for (var i = 0; i < n; i++) {
            aleatorio = Math.floor(Math.random() * n);
            this.LISTA.push(aleatorio);
        }
    }
    // Ex02
    LISTAAleatoria.prototype.toString = function () {
        var valores = "";
        for (var i = 0; i < this.LISTA.length; i++)
            valores += "".concat(this.LISTA[i], ",");
        return valores;
    };
    // EX03
    LISTAAleatoria.prototype.corte = function (valorDeCorte) {
        var LISTA_CORTADA = [];
        for (var i = 0; i < this.LISTA.length; i++)
            if (this.LISTA[i] >= valorDeCorte)
                LISTA_CORTADA.push(this.LISTA[i]);
        return LISTA_CORTADA;
    };
    // EX04
    LISTAAleatoria.prototype.corteMultiplos = function (valorDeCorte) {
        if (valorDeCorte === 0)
            return this.LISTA;
        var LISTA_CORTADA = [];
        if (valorDeCorte === 1)
            return LISTA_CORTADA;
        for (var i = 0; i < this.LISTA.length; i++)
            if ((i + 1) % valorDeCorte !== 0)
                LISTA_CORTADA.push(this.LISTA[i]);
        return LISTA_CORTADA;
    };
    // EX05
    LISTAAleatoria.prototype.maisProximoDaMedia = function () {
        var LISTA_ORDENADA = __spreadArray([], this.LISTA, true).sort(function (a, b) { return a - b; });
        var media = 0;
        var maisProximo = LISTA_ORDENADA[0];
        for (var i = 0; i < LISTA_ORDENADA.length; i++)
            media += LISTA_ORDENADA[i];
        media /= LISTA_ORDENADA.length;
        for (var i = 0; i < LISTA_ORDENADA.length; i++)
            if (Math.abs(LISTA_ORDENADA[i] - media) < Math.abs(maisProximo - media))
                maisProximo = LISTA_ORDENADA[i];
        return maisProximo;
    };
    // EX06
    LISTAAleatoria.prototype.reduzir = function (n) {
        var LISTA_REDUZIDA = [];
        for (var i = 0; i < n && i < this.LISTA.length; i++)
            LISTA_REDUZIDA.push(this.LISTA[i]);
        return LISTA_REDUZIDA;
    };
    // EX07
    LISTAAleatoria.prototype.fatia = function (inicio, fim) {
        var LISTA_FATIA = [];
        if (inicio >= 0 && fim <= this.LISTA.length && inicio < fim)
            for (var i = inicio; i <= fim && i < this.LISTA.length; i++)
                LISTA_FATIA.push(this.LISTA[i]);
        return LISTA_FATIA;
    };
    LISTAAleatoria.prototype.inverte = function () {
        var LISTA_INVERTIDA = [];
        if (this.LISTA.length > 0)
            for (var i = this.LISTA.length - 1; i >= 0; i--)
                LISTA_INVERTIDA.push(this.LISTA[i]);
        return LISTA_INVERTIDA;
    };
    LISTAAleatoria.prototype.amplitude = function () {
        if (this.LISTA.length > 0) {
            var LISTA_ORDENADA = __spreadArray([], this.LISTA, true).sort(function (a, b) { return a - b; });
            return LISTA_ORDENADA[LISTA_ORDENADA.length - 1] - LISTA_ORDENADA[0];
        }
        return 0;
    };
    return LISTAAleatoria;
}());
var LISTA = new LISTAAleatoria(10);
console.log('toString nativo', LISTA.LISTA.toString());
/* console.log('\nEX02 - toString modificado', LISTA.toString());

console.log('\nEX03 - VALOR DE CORTE: 5', LISTA.corte(5));

console.log('\nEX04 - CORTANDO ELEMENTOS NAS POSICOES MULTIPLAS DE: 3', LISTA.corteMultiplos(4));

console.log('\nEX05 - MAIS PROXIMO DA MEDIA', LISTA.maisProximoDaMedia());

console.log('\nEX06 - REDUZINDO A LISTA PARA OS PRIMEIROS 5 ELEMENTOS', LISTA.reduzir(5));

console.log('\nEX07 - FATIA DA LISTA DE 2 A 7', LISTA.fatia(2, 7));

console.log('\nEX08 - LISTA INVERTIDA', LISTA.inverte()); */
console.log('EX09 - AMPLITUDE DA LISTA', LISTA.amplitude());
