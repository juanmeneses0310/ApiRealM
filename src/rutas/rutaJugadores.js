import { Router } from "express";
import controladorJugadores1 from "../controladores/controladorJugadores.js";
const enrutadorJugadores = Router();

enrutadorJugadores.post("/", controladorJugadores1.crearJugador);
enrutadorJugadores.get("/:id", controladorJugadores1.leerJugador);
enrutadorJugadores.get("/", controladorJugadores1.leerJugadores);
enrutadorJugadores.put("/:id", controladorJugadores1.actualizarJugadores);
enrutadorJugadores.delete("/:id", controladorJugadores1.eliminarJugador);

export default enrutadorJugadores;
