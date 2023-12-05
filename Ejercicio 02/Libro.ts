class Libro {
  private isbn: string;
  private titulo: string;
  private autor: string;
  private numeroPaginas: number;

  constructor(
    isbn: string,
    titulo: string,
    autor: string,
    numeroPaginas: number
  ) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  getISBN(): string {
    return this.isbn;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  getNumeroPaginas(): number {
    return this.numeroPaginas;
  }

  setISBN(isbn: string): void {
    this.isbn = isbn;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setAutor(autor: string): void {
    this.autor = autor;
  }

  setNumeroPaginas(numeroPaginas: number): void {
    this.numeroPaginas = numeroPaginas;
  }

  toString(): string {
    return `El libro con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numeroPaginas} páginas.`;
  }
}

const libro1 = new Libro("1234567890", "Libro 1", "Autor 1", 200);
const libro2 = new Libro("9876543210", "Libro 2", "Autor 2", 150);

console.log(libro1.toString());
console.log(libro2.toString());

if (libro1.getNumeroPaginas() > libro2.getNumeroPaginas()) {
  console.log("El Libro 1 tiene más páginas.");
} else if (libro1.getNumeroPaginas() < libro2.getNumeroPaginas()) {
  console.log("El Libro 2 tiene más páginas.");
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas.");
}
