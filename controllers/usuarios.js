const { response, request } = require('express');

const getUsuarios = (req = request, res = response) => {
    const {q, nombre = 'no name', apikey, page = 1, limit=15} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const postUsuarios = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const putUsuarios = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const patchUsuarios = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}



module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios
}