import Persona from './Persona';

class Estudiante extends Persona {
    private calificacion: number;

    constructor(nombre: string, edad: number, sexo: string, calificacion: number) {
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
    }

    hacerNovillos(): boolean {
        return Math.random() < 0.5;
    }

    obtenerCalificacion(): number {
        return this.calificacion;
    }
}

export default Estudiante;
