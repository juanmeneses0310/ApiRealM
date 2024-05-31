import ModeloJugador from "../modelos/modeloJugadores.js";

const controladorJugadores1 = {
  crearJugador: async (req, res) => {
    try {
      const nuevoJugador = new ModeloJugador(req.body);
      const jugadorCreado = await nuevoJugador.save();
      if (jugadorCreado._id) {
        res.json({
          resultado: "bien",
          mensaje: "Jugador agregado",
          datos: jugadorCreado._id,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al agregar al jugador",
        datos: error,
      });
    }
  },
  leerJugador: async (req, res) => {
    try {
      const jugadorEncontrado = await ModeloJugador.findById(req.params.id);
      if (jugadorEncontrado._id) {
        res.json({
          resultado: "bien",
          mensaje: "Jugador encontrado",
          datos: jugadorEncontrado,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "Ocurrió un error al encontrar al jugador",
        datos: error,
      });
    }
  },
  leerJugadores: async (req, res) => {
    try {
      const jugadoresEncontrados = await ModeloJugador.find();
      if (jugadoresEncontrados) {
        res.json({
          resultado: "bien",
          mensaje: "jugadores encontrados",
          datos: jugadoresEncontrados,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al leer los usuarios",
        datos: error,
      });
    }
  },
  actualizarJugadores: async (req, res) => {
    try {
      const jugadorActualizado = await ModeloJugador.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (jugadorActualizado._id) {
        res.json({
          resultado: "bien",
          mensaje: "El jugador fue actualizado",
          datos: jugadorActualizado._id,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al actualizar al jugador",
        datos: error,
      });
    }
  },
  eliminarJugador: async (req, res) => {
    try {
      const jugadorEliminado = await ModeloJugador.findByIdAndDelete(
        req.params.id
      );
      if (jugadorEliminado) {
        res.json({
          resultado: "bien",
          mensaje: "El jugador fue eliminado",
          datos: null,
        });
      }
    } catch (error) {
      res.json({
        resultado: "mal",
        mensaje: "ocurrió un error al eliminar el usuario",
        datos: error,
      });
    }
  },
};

export default controladorJugadores1;
