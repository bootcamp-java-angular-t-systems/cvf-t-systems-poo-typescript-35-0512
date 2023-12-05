import Serie from "./Serie";
import Videojuego from "./Videojuego";

const series: Serie[] = [];
const videojuegos: Videojuego[] = [];

series[0] = new Serie("Serie A", "Creador A");
series[1] = new Serie("Serie B", "Creador B");

videojuegos[0] = new Videojuego("Videojuego A", 15, "Aventura", "Compañía A");
videojuegos[1] = new Videojuego("Videojuego B", 10, "Acción", "Compañía B");

series[0].entregar();
series[2].entregar();
videojuegos[1].entregar();
videojuegos[3].entregar();

const seriesEntregadas = series.filter((serie) => serie.isEntregado());
const videojuegosEntregados = videojuegos.filter((vj) => vj.isEntregado());

console.log(`Series entregadas: ${seriesEntregadas.length}`);
console.log(`Videojuegos entregados: ${videojuegosEntregados.length}`);

const serieMasTemporadas = series.reduce((prev, current) =>
  current.compareTo(prev) > 0 ? current : prev
);

const videojuegoMasHoras = videojuegos.reduce((prev, current) =>
  current.compareTo(prev) > 0 ? current : prev
);

console.log(`Serie con más temporadas:\n${serieMasTemporadas.toString()}`);
console.log(`Videojuego con más horas estimadas:\n${videojuegoMasHoras.toString()}`);
