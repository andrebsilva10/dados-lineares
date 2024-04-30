class LISTAAleatoria {
    readonly LISTA: number[] = [];

    constructor(n: number) {
        let aleatorio: number;

        for (let i = 0; i < n; i++) {
            aleatorio = Math.floor(Math.random() * n);
            this.LISTA.push(aleatorio);
        }
    }

    // Ex02
    public toString(): string {
        let valores = "";

        for (let i = 0; i < this.LISTA.length; i++)
            valores += `${this.LISTA[i]},`

        return valores;
    }

    // EX03
    public corte(valorDeCorte: number): number[] {
        const LISTA_CORTADA = []; 
        
        for (let i = 0; i < this.LISTA.length; i++) 
            if (this.LISTA[i] >= valorDeCorte)
                LISTA_CORTADA.push(this.LISTA[i]); 
        
        return LISTA_CORTADA;
    }

    // EX04
    public corteMultiplos(valorDeCorte: number): number[] {
        if (valorDeCorte === 0)
            return this.LISTA;

        const LISTA_CORTADA: number[] = []; 
        
        if (valorDeCorte === 1) 
            return LISTA_CORTADA;
        
        for (let i = 0; i < this.LISTA.length; i++) 
            if ((i + 1) % valorDeCorte !== 0)
                LISTA_CORTADA.push(this.LISTA[i]); 
        
        return LISTA_CORTADA;
    }

    // EX05
    public maisProximoDaMedia(): number{
        const LISTA_ORDENADA = [...this.LISTA].sort((a, b) => a - b);
        let media = 0;
        let maisProximo = LISTA_ORDENADA[0];

        for (let i = 0; i < LISTA_ORDENADA.length; i++) 
            media += LISTA_ORDENADA[i];
        media /= LISTA_ORDENADA.length;

        for (let i = 0; i < LISTA_ORDENADA.length; i++)
            if (Math.abs(LISTA_ORDENADA[i] - media) < Math.abs(maisProximo - media))
                maisProximo = LISTA_ORDENADA[i];

        return maisProximo;
    }

    // EX06
    public reduzir(n: number): number[] {
        const LISTA_REDUZIDA = [];

        for (let i = 0; i < n && i < this.LISTA.length; i++) 
            LISTA_REDUZIDA.push(this.LISTA[i]);
        return LISTA_REDUZIDA;
    }

    // EX07
    public fatia(inicio: number, fim: number): number[] {
        const LISTA_FATIA = [];
        
        if (inicio >= 0 && fim <= this.LISTA.length && inicio < fim)
            for (let i = inicio; i <= fim && i < this.LISTA.length; i++) 
                LISTA_FATIA.push(this.LISTA[i]);    
        
        return LISTA_FATIA;
    }

    // EX08
    public inverte(): number[] {
        const LISTA_INVERTIDA = []
        if (this.LISTA.length > 0)
            for (let i = this.LISTA.length - 1 ; i >= 0; i--)
                LISTA_INVERTIDA.push(this.LISTA[i]);
        return LISTA_INVERTIDA
    }

    //EX09
    public amplitude(): number {
        if (this.LISTA.length > 0) {
            const LISTA_ORDENADA = [...this.LISTA].sort((a, b) => a - b); 

            return LISTA_ORDENADA[LISTA_ORDENADA.length - 1] - LISTA_ORDENADA[0];
        }
        return 0
    }
}

const LISTA = new LISTAAleatoria(10);
console.log('toString nativo', LISTA.LISTA.toString());

console.log('\nEX02 - toString modificado', LISTA.toString());

console.log('\nEX03 - VALOR DE CORTE: 5', LISTA.corte(5));

console.log('\nEX04 - CORTANDO ELEMENTOS NAS POSICOES MULTIPLAS DE: 3', LISTA.corteMultiplos(4));

console.log('\nEX05 - MAIS PROXIMO DA MEDIA', LISTA.maisProximoDaMedia());

console.log('\nEX06 - REDUZINDO A LISTA PARA OS PRIMEIROS 5 ELEMENTOS', LISTA.reduzir(5));

console.log('\nEX07 - FATIA DA LISTA DE 2 A 7', LISTA.fatia(2, 7));

console.log('\nEX08 - LISTA INVERTIDA', LISTA.inverte());

console.log('EX09 - A AMPLITUDE DA LISTA É: ', LISTA.amplitude());