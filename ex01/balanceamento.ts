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

class Balanceamento {
    readonly expressao: string;

    constructor(expressao: string) {
        this.expressao = expressao;
    }

    private operadores() {
        const pares: { [key: string]: string } = {
            '{': '}',
            '[': ']',
            '(': ')'
        };
        return pares;
    };
    
    public estaBalanceado(): boolean {
        const pilha = [];
        const operadores = this.operadores();
        let ultimoAbrindo = null;

        if (this.expressao.length === 0) {
            return true;
        }

        for (let char of this.expressao) {
            if (operadores[char]) {
                
                if (pilha.length > 0) {
                    ultimoAbrindo = pilha[pilha.length - 1];
                    if (ultimoAbrindo === '(' && (char === '{' || char === '['))
                        return false;
                    if (ultimoAbrindo === '[' && char === '{')
                        return false;
                }
                
                pilha.push(char)
            }
            else if (char === '}' || char === ']' || char === ')') {
                if (pilha.length === 0) {
                    return false;
                }

                let removido = pilha.pop();
                if (removido !== undefined && operadores[removido] !== char) {
                    return false;
                }
            }
        }

        return pilha.length === 0;
    }
}

const expressao1 = new Balanceamento('(a + b)');
const expressao2 = new Balanceamento('');
const expressao3 = new Balanceamento('{a * [c - b * (e + f)]} - 2');
const expressao4 = new Balanceamento('(a + b');
const expressao5 = new Balanceamento('{a + b)]');
const expressao6 = new Balanceamento('[a + b)}');
const expressao7 = new Balanceamento('(a + {b})');
const expressao8 = new Balanceamento('{{{');
const expressao9 = new Balanceamento('(((((((((((((((((((((');
const expressao10 = new Balanceamento(']]]]]]]]]]]]]]]]]]]]]');
const expressao11 = new Balanceamento('}}}}}}}}}}}}}}}}}}}}');
const expressao12 = new Balanceamento('(a + [b * {c + d}])');
const expressao13 = new Balanceamento('{a + [b * (c + d)]}');
const expressao14 = new Balanceamento('(a + [b * {c + d)}]');
const expressao15 = new Balanceamento('{a + [b * (c + d}])');

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
console.log('Expressão 12:', expressao12.estaBalanceado()); // false
console.log('Expressão 13:', expressao13.estaBalanceado()); // true
console.log('Expressão 14:', expressao14.estaBalanceado()); // false
console.log('Expressão 15:', expressao15.estaBalanceado()); // false