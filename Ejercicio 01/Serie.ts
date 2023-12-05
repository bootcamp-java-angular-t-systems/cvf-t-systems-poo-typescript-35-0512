import { IEntregable } from './IEntregable';

class Serie implements IEntregable {
  private titulo: string;
  private numeroTemporadas: number;
  private entregado: boolean;
  private genero: string;
  private creador: string;

  constructor(titulo: string, creador: string) {
    this.titulo = titulo;
    this.numeroTemporadas = 3;
    this.entregado = false;
    this.genero = "";
    this.creador = creador;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getNumeroTemporadas(): number {
    return this.numeroTemporadas;
  }

  getGenero(): string {
    return this.genero;
  }

  getCreador(): string {
    return this.creador;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setNumeroTemporadas(numeroTemporadas: number): void {
    this.numeroTemporadas = numeroTemporadas;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  setCreador(creador: string): void {
    this.creador = creador;
  }

  toString(): string {
    return `Título: ${this.titulo}, Temporadas: ${this.numeroTemporadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Creador: ${this.creador}`;
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

  compareTo(a: Serie): number {
    return this.numeroTemporadas - a.numeroTemporadas;
  }
}

export default Serie;
