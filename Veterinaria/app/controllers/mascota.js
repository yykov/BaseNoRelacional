const mongoose = require('mongoose')
const model = require('../models/mascota')

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            docs : docs
        })
    })
}

exports.insertData = (req, res) => {
    const data = req.body 
    model.create(data,(err, docs) => {
        if(err) {
            res.send({ error: 'Error' }, 422)
        }else {
            res.send({ data : docs })
        }
    })
}

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        }
    )
}

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        }
    )
}