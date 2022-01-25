const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost/Veterinaria`

MongoClient.connect(url, () => {
    const relacionar = async () => {
        const resultados = await mascotas.aggregate(
            [
                {
                    $lookup:
                    {
                        from: "clientes",
                        localField: "dueno",
                        foreignField: "_id",
                        as: "duenoMascota"
                    }
                },
                { $unwind: "$duenoMascota" }
            ]
        )
        resultados.forEach(resultado => {
            db.clientes.update({ foreignField }, {$set (cant_mascota = cant_mascota + 1)})
        });
    }

})


