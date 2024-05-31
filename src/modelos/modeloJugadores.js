import { Schema, model } from "mongoose";

const esquemaJugadores = new Schema({
  nombre: { type: String, required: true },
  dorsal: { type: Number, required: true },
  fechanacimiento: { type: Date, required: true },
  activo: { type: Boolean, required: true },
  pais: { type: String, required: true },
  goles: { type: Number, required: true },
  asistencias: { type: Number, required: true },
  masequipos: { type: Boolean, required: true },
  valor: { type: Number, required: true },
  posicion: { type: String, required: true },
  foto: { type: String, required: true },
});

export default model("Jugador", esquemaJugadores);
