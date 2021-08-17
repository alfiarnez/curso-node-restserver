const {response,request} = require('express');


const usuariosGet = (req=request, res=response)=> {
    const {q,pkey,limit='20'} = req.query
    res.json({
        msg:'get API - Controlador',
        q,
        pkey,
        limit
    })
}

const usuariosPost = (req, res)=> {

    const {nombre,edad} = req.body;

    res.json({
        msg:'post API - Controlador',
        nombre,
        edad
    })        
}
const usuariosPut = (req, res=response)=> {
    const {id}=req.params;

    res.json({
        msg:'put API - Controlador',
        id
    })
}
const usuariosPatch = (req, res=response)=> {
    res.json({
        msg:'patch API - Controlador'})
}
const usuariosDelete = (req, res=response)=> {
    res.json({
        msg:'delete API - Controlador'})
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}