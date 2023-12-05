import Persona from './Persona';

class Profesor extends Persona {
    private materia: string;

    constructor(nombre: string, edad: number, sexo: string, materia: string) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }

    noDisponible(): boolean {
        return Math.random() < 0.2;
    }

    obtenerMateria(): string {
        return this.materia;
    }
}

export default Profesor;
