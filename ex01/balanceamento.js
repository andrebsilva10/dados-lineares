/* BALANCEAMENTO – Modele uma classe que tenha, como atributo, um texto que represente uma
expressão matemática (recebido no construtor). Implemente um método que retorne se essa
expressão está balanceada quanto às chaves, colchetes e parênteses.
Considere que os colchetes são internos às chaves e que os parênteses são internos aos colchetes.
Assim, não se pode ter chaves dentro de parênteses.
Nenhuma outra propriedade precisa ser avaliada (como, por exemplo, os operadores e operandos).
Exemplos de expressões válidas:
(a + b)
{a * [c – b * (e + f)]} – 2
Exemplos de expressões inválidas:
(a + b
 a + b)
{a * [(c – b * (e + f)]} – 2 */
var Balanceamento = /** @class */ (function () {
    function Balanceamento(expressao) {
        this.expressao = expressao;
    }
    Balanceamento.prototype.operadores = function () {
        var pares = {
            '{': '}',
            '[': ']',
            '(': ')'
        };
        return pares;
    };
    ;
    Balanceamento.prototype.estaBalanceado = function () {
        var pilha = [];
        var operadores = this.operadores();
        var ultimoAbrindo = null;
        if (this.expressao.length === 0) {
            return true;
        }
        for (var _i = 0, _a = this.expressao; _i < _a.length; _i++) {
            var char = _a[_i];
            if (operadores[char]) {
                if (pilha.length > 0) {
                    ultimoAbrindo = pilha[pilha.length - 1];
                    if (ultimoAbrindo === '(' && (char === '{' || char === '['))
                        return false;
                    if (ultimoAbrindo === '[' && char === '{')
                        return false;
                }
                pilha.push(char);
            }
            else if (char === '}' || char === ']' || char === ')') {
                if (pilha.length === 0) {
                    return false;
                }
                var removido = pilha.pop();
                if (removido !== undefined && operadores[removido] !== char) {
                    return false;
                }
            }
        }
        return pilha.length === 0;
    };
    return Balanceamento;
}());
var expressao1 = new Balanceamento('(a + b)');
var expressao2 = new Balanceamento('');
var expressao3 = new Balanceamento('{a * [c - b * (e + f)]} - 2');
var expressao4 = new Balanceamento('(a + b');
var expressao5 = new Balanceamento('{a + b)]');
var expressao6 = new Balanceamento('[a + b)}');
var expressao7 = new Balanceamento('(a + {b})');
var expressao8 = new Balanceamento('{{{');
var expressao9 = new Balanceamento('(((((((((((((((((((((');
var expressao10 = new Balanceamento(']]]]]]]]]]]]]]]]]]]]]');
var expressao11 = new Balanceamento('}}}}}}}}}}}}}}}}}}}}');
var expressao12 = new Balanceamento('(a + [b * {c + d}])');
var expressao13 = new Balanceamento('{a + [b * (c + d)]}');
var expressao14 = new Balanceamento('(a + [b * {c + d)}]');
var expressao15 = new Balanceamento('{a + [b * (c + d}])');
console.log('Expressão 1:', expressao1.estaBalanceado()); // true
console.log('Expressão 2:', expressao2.estaBalanceado()); // true
console.log('Expressão 3:', expressao3.estaBalanceado()); // true
console.log('Expressão 4:', expressao4.estaBalanceado()); // false
console.log('Expressão 5:', expressao5.estaBalanceado()); // false
console.log('Expressão 6:', expressao6.estaBalanceado()); // false
console.log('Expressão 7:', expressao7.estaBalanceado()); // false
console.log('Expressão 8:', expressao8.estaBalanceado()); // false
console.log('Expressão 9:', expressao9.estaBalanceado()); // false
console.log('Expressão 10:', expressao10.estaBalanceado()); // false
console.log('Expressão 11:', expressao11.estaBalanceado()); // false
console.log('Expressão 12:', expressao12.estaBalanceado()); // true
console.log('Expressão 13:', expressao13.estaBalanceado()); // true
console.log('Expressão 14:', expressao14.estaBalanceado()); // false
console.log('Expressão 15:', expressao15.estaBalanceado()); // false
