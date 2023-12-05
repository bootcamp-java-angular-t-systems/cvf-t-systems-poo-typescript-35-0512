import { IEntregable } from './IEntregable';

class Videojuego implements IEntregable {
  private titulo: string;
  private horasEstimadas: number;
  private entregado: boolean;
  private genero: string;
  private compania: string;

  constructor(
    titulo: string,
    horasEstimadas: number,
    genero: string,
    compania: string
  ) {
    this.titulo = titulo;
    this.horasEstimadas = horasEstimadas || 10;
    this.entregado = false;
    this.genero = genero || "";
    this.compania = compania || "";
  }

  getTitulo(): string {
    return this.titulo;
  }

  getHorasEstimadas(): number {
    return this.horasEstimadas;
  }

  getGenero(): string {
    return this.genero;
  }

  getCompania(): string {
    return this.compania;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setHorasEstimadas(horasEstimadas: number): void {
    this.horasEstimadas = horasEstimadas;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  setCompania(compania: string): void {
    this.compania = compania;
  }

  toString(): string {
    return `Título: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Compañía: ${this.compania}`;
  }

  entregar(): void {
    this.entregado = true;
  }

  devolver(): void {
    this.entregado = false;
  }

  isEntregado(): boolean {
    return this.entregado;
  }

  compareTo(a: Videojuego): number {
    return this.horasEstimadas - a.horasEstimadas;
  }
}

export default Videojuego;

