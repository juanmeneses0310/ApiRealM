import express from "express";
import morgan from "morgan";
import enrutadorJugadores from "./rutas/rutaJugadores.js";

const servidor = express();

servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/jugadores", enrutadorJugadores);

servidor.get("/", (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
});

export default servidor;
