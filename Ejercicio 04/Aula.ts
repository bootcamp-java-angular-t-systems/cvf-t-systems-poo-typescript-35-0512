import Profesor from './Profesor';
import Estudiante from './Estudiante';


class Aula {
    private id: number;
    private capacidad: number;
    private materiaDestinada: string;
    private profesor: Profesor | null;
    private estudiantes: Estudiante [];

    constructor(id: number, capacidad: number, materiaDestinada: string) {
        this.id = id;
        this.capacidad = capacidad;
        this.materiaDestinada = materiaDestinada;
        this.profesor = null;
        this.estudiantes= [];
    }

    asignarPrfesor(profesor: Profesor): void {
        this.profesor = profesor;
    }

    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

    puedeDarClase(): boolean {
        const porcentajeAlumnos = this.estudiantes.length / this.capacidad;
        return (
            this.profesor !== null &&
            !this.profesor.noDisponible() &&
            this.profesor.obtenerMateria() === this.materiaDestinada &&
            porcentajeAlumnos > 0.5
        );
    }

    mostrarAprobados(): void {
        const aprobadosHombres = this.estudiantes.filter(
            (estudiante) => estudiante.obtenerCalificacion() >= 5 && estudiante.getSexo() == 'Hombre'
        );
        const aprobadosMujeres = this.estudiantes.filter(
            (estudiante) => estudiante.obtenerCalificacion() >= 5 && estudiante.getSexo() == 'Mujer'
        );

        console.log(`Hombres Aprobados: ${aprobadosHombres.length}`);
        console.log(`Mujeres Aprobados: ${aprobadosMujeres.length}`);
    }
}