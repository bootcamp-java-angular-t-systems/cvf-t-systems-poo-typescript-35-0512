class Persona {
    protected nombre: string;
    protected edad: number;
    protected sexo: string;

    constructor(nombre: string, edad: number, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    getNombre(): string {
        return this.nombre;
    }
    
    getEdad(): number {
        return this.edad;
    }
    
    getSexo(): string {
        return this.sexo;
    }
}

export default Persona;