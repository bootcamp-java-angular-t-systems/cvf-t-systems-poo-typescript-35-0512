
// Ejemplo de uso
const pelicula = new Pelicula('Inception', 150, 16, 'Christopher Nolan');
const cine = new Cine(8, 9, pelicula, 10);

// Simulación de espectadores
for (let i = 1; i <= 20; i++) {
  const espectador = new Espectador(`Espectador${i}`, Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 30) + 10);
  cine.sentarEspectador(espectador);
}