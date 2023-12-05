class Cine {
    private asientos: boolean[][];
    private peliculaActual: Pelicula;
    private precioEntrada: number;

    constructor(filas: number, columnas: number, peliculaActual: Pelicula, precioEntrada: number) {
        this.asientos = Array.from({length : filas }, () => Array(columnas).fill(false) );
        this.peliculaActual = peliculaActual;
        this.precioEntrada = precioEntrada;
    }

    sentarEspectador(espectador: Espectador): void {
        if (espectador.getDinero() >= this.precioEntrada && espectador.getEdad() >= this.peliculaActual.getEdadMinima()) {
            let asientoOcupado = true;

            while (asientoOcupado) {
                const fila = Math.floor(Math.random() * this.asientos.length);
                const columna = Math.floor(Math.random() * this.asientos[0].length);

                if (!this.asientos[fila][columna]) {
                    this.asientos[fila][columna] = true;
                    console.log(`Se ha sentado a ${espectador.getNombre()} en el asiento ${String.fromCharCode(65 + columna)}${fila + 1}`);
                    asientoOcupado = false;
                }
            }
        } else {
            console.log(`${espectador.getNombre()} no cumple con los requisitos para ver la película.`);
        }
    }
}
