const mongoose = require('mongoose')

const DB_URI = `mongodb://localhost/Veterinaria`

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err){
                    console.log('DB: ERROR !!');
                }else {
                    console.log('Conexion correcta');
                }
            }
        )
    }

    connect();
}