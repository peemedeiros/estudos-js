const express = require('express');
const router = express.Router();
const conn = require('../connection');

//
router.get('/', (req, res) => {

    const sql = "SELECT * FROM clientes";

    conn.query(sql, (error, result) => {
        if(error){
            res.json(error);
        }else{
            res.json(result);
        }
    });
});

//inserindo dados via post
router.post('/', (req, res) => {

    const nomeCliente = req.body.nome;
    const idadeCliente = req.body.idade;

    const sql = `INSERT INTO clientes (nome, idade) values ('${nomeCliente}', ${idadeCliente})`;

    conn.query(sql, (error, result) => {
        if(error){
            res.json(error);
        }else{
            res.json(result);
        }
    });
});

router.delete('/:id' , (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM clientes WHERE id = ${id}`;

    conn.query(sql, (error, result) =>{
        if(error){
            res.json({
                "erro" : error.sql
            });
        }else{
            res.json(result);
        }
    })


});

module.exports = router;