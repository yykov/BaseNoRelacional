const mongoose = require('mongoose')

const ClientScheme = new mongoose.Schema(
    {
        cedula_cl: {
            type: String
        },
        nombre_cl: {
            type: String
        },
        apellido_cl: {
            type: String
        },
        genero_cl: {
            type: String
        },
        direccion_cl: {
            type: String
        },
        telefono_cl: {
            type: String
        },
        fecha_registro_cl: {
            type: Date
        },
        antiguedad: {
            type: Number
        },
        fecha_ultima_visita: {
            type: Date
        },
        cant_mascota: {
            type: Number
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('cliente', ClientScheme)