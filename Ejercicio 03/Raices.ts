class Raices {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c:number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminante(): number {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }

    tieneRaiz(): boolean {
        return this.getDiscriminante() === 0;
    }

    calcular(): void {
        const discriminante = this.getDiscriminante();

        if (discriminante > 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2  * this.a);
            const raiz2 = (-this.b + Math.sqrt(discriminante)) / (2  * this.a);
            console.log(`Existen dos soluciones: Raiz1 = ${raiz1}, Raiz2 = ${raiz2}`);
        } else {
            console.log('No existen soluciones reales.');
        }

    }

    obtenerRaiz(): void {
        const discriminante = this.getDiscriminante();

        if (discriminante === 0) {
            const raizUnica = -this.b / (2 * this.a);
            console.log(`Raiz univa = ${raizUnica}`);
        } else {
            console.log('No existe una úica solucion real.');
        }
    }
}

const ecuacion1 = new Raices(1, -3, 2);
ecuacion1.calcular();

const ecuacion2 = new Raices(1, -2, 1);
ecuacion2.calcular();

const ecuacion3 = new Raices(1, 2, 5);
ecuacion3.calcular(); 
