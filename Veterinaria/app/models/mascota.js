const mongoose = require('mongoose')

const PetScheme = new mongoose.Schema(
    {
        nombre_masc: {
            type: String
        },
        fech_nac_masc: {
            type: Date
        },
        genero_masc: {
            type: String
        },
        color_masc: {
            type: String
        },
        esteril: {
            type: String
        },
        dueno: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('mascota', PetScheme)